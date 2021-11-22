import { PrismaService } from '@aelp-app/models';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { compare } from 'bcrypt';
import moment from 'moment';

import { generateRefreshToken } from '../utils/generateRefreshToken';
import { UserAuthInfoDto } from './dto/UserAuthInfoDto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './guards/JwtAuthGuard';
import { AuthService } from './auth.service';

@Resolver()
export default class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => UserAuthInfoDto)
  async login(
    @Args('userName') userName: string,
    @Args('password') password: string
  ) {
    return this.authService.loginWithCreds(userName, password);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean)
  async logout(@Args('refreshToken') refreshToken: string) {
    return this.authService.logout(refreshToken);
  }

  @Mutation(() => UserAuthInfoDto)
  async refreshAuth(@Args('refreshToken') refreshToken: string) {
    return this.authService.refreshAuth(refreshToken);
  }
}
