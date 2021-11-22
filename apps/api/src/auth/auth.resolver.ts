import { PrismaService } from '@aelp-app/models';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { compare } from 'bcrypt';
import moment from 'moment';
import { ConfigService } from '@nestjs/config';

import { generateRefreshToken } from '../utils/generateRefreshToken';
import { UserAuthInfoDto } from './dto/UserAuthInfoDto';
import { JwtService } from '@nestjs/jwt';

@Resolver()
export default class AuthResolver {
  constructor(
    private prismaService: PrismaService,
    private configService: ConfigService,
    private jwtService: JwtService
  ) {}

  @Mutation(() => UserAuthInfoDto)
  async login(
    @Args('userName') userName: string,
    @Args('password') password: string
  ) {
    const user = await this.prismaService.user.findUnique({
      where: { userName },
      select: { password: true, id: true, firstName: true, lastName: true },
    });

    const error = new Error('Login Unsuccessful');

    if (!user) {
      throw error;
    }

    if (!(await compare(password, user.password))) {
      throw error;
    }

    const refreshToken = generateRefreshToken();

    await this.prismaService.userRefreshToken.create({
      data: {
        expiryDate: moment().add({ y: 1 }).toDate(),
        token: refreshToken,
        user: { connect: { id: user.id } },
      },
    });

    const payload = {
      userId: user.id,
    };

    const token = this.jwtService.sign(payload);

    return {
      token,
      refreshToken,
      userId: user.id,
    };
  }

  @Mutation(() => Boolean)
  async logout(@Args('refreshToken') refreshToken: string) {
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

  @Mutation(() => UserAuthInfoDto)
  async refreshToken(@Args('refreshToken') refreshToken: string) {
    const userRefreshToken =
      await this.prismaService.userRefreshToken.findUnique({
        where: { token: refreshToken },
        select: { user: true, expiryDate: true, id: true },
      });

    if (!userRefreshToken) {
      throw new Error('The refresh token is invalid.');
    }

    if (moment().isAfter(userRefreshToken.expiryDate)) {
      throw new Error('The refresh token has expired');
    }

    const payload = {
      userId: userRefreshToken.user.id,
    };

    const token = this.jwtService.sign(payload);

    const refreshTokenNew = generateRefreshToken();

    await this.prismaService.userRefreshToken.update({
      where: { id: userRefreshToken.id },
      data: {
        expiryDate: moment().add({ y: 1 }).toDate(),
        token: refreshTokenNew,
        user: { connect: { id: userRefreshToken.user.id } },
      },
    });

    return {
      token,
      refreshToken: refreshTokenNew,
      userId: userRefreshToken.user.id,
    };
  }
}
