import { PrismaService } from '@aelp-app/models';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserInputError } from 'apollo-server-errors';
import { compare } from 'bcrypt';
import moment from 'moment';
import { IPAddressLookUpService } from '../../helper-services/IPAdddressLookUp.service';
import { UserService } from '../user/user.service';
import { generateRefreshToken } from '../../utils/generateRefreshToken';
import { UserAuthInfoDto } from './dto/UserAuthInfoDto';
import { GoogleOAuthClientService } from './google-oauth-client.service';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private googleOAuthClient: GoogleOAuthClientService,
    private jwtService: JwtService
  ) {}

  async loginWithCreds(
    userName: string,
    password: string
  ): Promise<UserAuthInfoDto> {
    const user = await this.prismaService.user.findUnique({
      where: { userName },
      select: {
        password: true,
        id: true,
        linkedAccounts: { select: { provider: { select: { name: true } } } },
      },
    });

    const error = new Error('Login Unsuccessful');

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
  ): Promise<UserAuthInfoDto> {
    const loginTicket = await this.googleOAuthClient.verifyIdToken(
      authorizationCode
    );
    const payload = loginTicket.getPayload();

    const linkedAccount = await this.prismaService.linkedAccount.findUnique({
      where: { externalId: payload.sub },
      select: { user: true },
    });

    let authPayload: Omit<UserAuthInfoDto, 'refreshToken'>;

    if (linkedAccount) {
      authPayload = await this.authorize(linkedAccount.user.id);
    } else {
      const user = await this.prismaService.user.create({
        data: {
          email: payload.email,
          firstName: payload.given_name,
          lastName: payload.family_name,
          linkedAccounts: {
            create: [
              {
                externalId: payload.sub,
                provider: { connect: { name: 'google' } },
              },
            ],
          },
          userName: payload.email.split('@')[0],
          country: {
            connect: {
              countryCode: country || 'PK',
            },
          },
        },
      });

      authPayload = await this.authorize(user.id);
    }

    return {
      ...authPayload,
      refreshToken: await this.createRefreshToken(authPayload.userId),
    };
  }

  async authorize(
    userId: string
  ): Promise<Omit<UserAuthInfoDto, 'refreshToken'>> {
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

  async refreshAuth(refreshToken: string): Promise<UserAuthInfoDto> {
    const userRefreshToken =
      await this.prismaService.userRefreshToken.findUnique({
        where: { token: refreshToken },
        select: { user: true, expiryDate: true, id: true },
      });

    if (!userRefreshToken) {
      throw new UserInputError('The refresh token is invalid.');
    }

    if (moment().isAfter(userRefreshToken.expiryDate)) {
      throw new Error('The refresh token has expired');
    }

    const authPayload = await this.authorize(userRefreshToken.user.id);

    return {
      refreshToken,
      ...authPayload,
    };
  }
}
