import { PrismaService } from '@aelp-app/models';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthenticationError } from 'apollo-server-errors';
import { compare } from 'bcrypt';
import moment from 'moment';
import { generateRefreshToken } from '../../utils/generateRefreshToken';
import { UserAuthInfo } from './dto/UserAuthInfo';
import { GoogleOAuthClientService } from './google-oauth-client.service';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private googleOAuthClient: GoogleOAuthClientService,
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  verifyAuthToken(jwtToken: string): boolean {
    try {
      const data = this.jwtService.verify(jwtToken);
      return data !== undefined;
    } catch (error) {
      return false;
    }
  }

  async loginWithCreds(email: string, password: string): Promise<UserAuthInfo> {
    const user = await this.prismaService.user.findUnique({
      where: { email },
      select: {
        password: true,
        id: true,
        linkedAccounts: { select: { provider: { select: { name: true } } } },
      },
    });

    const error = new UnauthorizedException('Email/password is invalid');

    if (!user) {
      throw error;
    }

    if (!user.password) {
      throw new Error(
        `This account is logged in via third-party login. Use ${user.linkedAccounts.join(
          ' or '
        )}`
      );
    }

    if (!(await compare(password, user.password))) {
      throw error;
    }

    const authPayload = await this.authorize(user.id);
    const authPayloadWithRefreshToken = {
      ...authPayload,
      refreshToken: await this.createRefreshToken(user.id),
    };

    return authPayloadWithRefreshToken;
  }

  async loginWithGoogle(
    authorizationCode: string,
    country?: string
  ): Promise<UserAuthInfo> {
    const loginTicket = await this.googleOAuthClient.verifyIdToken(
      authorizationCode
    );
    const payload = loginTicket.getPayload();

    const linkedAccount = await this.prismaService.linkedAccount.findUnique({
      where: { externalId: payload.sub },
      select: { user: true },
    });

    let authPayload: Omit<UserAuthInfo, 'refreshToken'>;

    if (linkedAccount) {
      authPayload = await this.authorize(linkedAccount.user.id);
    } else {
      const user = await this.userService.registerUserWithGoogle(
        payload,
        country
      );
      authPayload = await this.authorize(user.id);
    }

    return {
      ...authPayload,
      refreshToken: await this.createRefreshToken(authPayload.userId),
    };
  }

  async authorize(userId: string): Promise<Omit<UserAuthInfo, 'refreshToken'>> {
    const payload = {
      userId,
    };

    const token = this.jwtService.sign(payload);

    return {
      token,
      userId,
    };
  }

  async createRefreshToken(userId: string) {
    const refreshToken = generateRefreshToken();

    await this.prismaService.userRefreshToken.create({
      data: {
        expiryDate: moment().add({ y: 1 }).toDate(),
        token: refreshToken,
        user: { connect: { id: userId } },
      },
    });

    return refreshToken;
  }

  async logout(refreshToken: string) {
    const userRefreshToken =
      await this.prismaService.userRefreshToken.findUnique({
        where: { token: refreshToken },
        select: { id: true },
      });

    if (!userRefreshToken) {
      return false;
    }

    await this.prismaService.userRefreshToken.delete({
      where: { id: userRefreshToken.id },
    });

    return true;
  }

  async refreshAuth(refreshToken: string): Promise<UserAuthInfo> {
    const userRefreshToken =
      await this.prismaService.userRefreshToken.findUnique({
        where: { token: refreshToken },
        select: { user: true, expiryDate: true, id: true },
      });

    if (!userRefreshToken) {
      throw new AuthenticationError('Unauthenticated');
    }

    if (moment().isAfter(userRefreshToken.expiryDate)) {
      throw new AuthenticationError('Expired or invalid refresh token');
    }

    const authPayload = await this.authorize(userRefreshToken.user.id);

    return {
      refreshToken,
      ...authPayload,
    };
  }
}
