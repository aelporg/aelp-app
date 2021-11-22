import { PrismaService } from '@aelp-app/models';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserInputError } from 'apollo-server-errors';
import { compare } from 'bcrypt';
import moment from 'moment';
import { generateRefreshToken } from '../utils/generateRefreshToken';
import { UserAuthInfoDto } from './dto/UserAuthInfoDto';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService
  ) {}

  async loginWithCreds(
    userName: string,
    password: string
  ): Promise<UserAuthInfoDto> {
    const user = await this.prismaService.user.findUnique({
      where: { userName },
      select: { password: true, id: true },
    });

    const error = new Error('Login Unsuccessful');

    if (!user) {
      throw error;
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

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async loginWithGoogle(authorizationCode: string) {}

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
