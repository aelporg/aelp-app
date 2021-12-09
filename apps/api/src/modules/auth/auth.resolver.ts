import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { UserAuthInfoDto } from './dto/UserAuthInfoDto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './guards/JwtAuthGuard';
import { AuthService } from './auth.service';
import { IPAddressLookUpService } from '../../helper-services/IPAdddressLookUp.service';

@Resolver()
export default class AuthResolver {
  constructor(
    private authService: AuthService,
    private ipAddressService: IPAddressLookUpService
  ) {}

  @Mutation(() => UserAuthInfoDto)
  async loginWithCreds(
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

  @Mutation(() => UserAuthInfoDto)
  async loginWithGoogle(
    @Args('tokenId') authorizationCode: string,
    @Context() ctx
  ) {
    return this.authService.loginWithGoogle(
      authorizationCode,
      await this.ipAddressService.getCountryOfRequest(ctx)
    );
  }
}
