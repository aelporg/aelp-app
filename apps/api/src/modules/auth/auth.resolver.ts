import { Args, Context, Mutation, Resolver } from '@nestjs/graphql'
import { UserAuthInfo } from './types/UserAuthInfo'
import { UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from './guards/JwtAuthGuard'
import { AuthService } from './auth.service'
import { IPAddressLookUpService } from '../../helper-services/IPAdddressLookUp.service'
import SkipAuth from './helpers/SkipAuth'

@Resolver()
export default class AuthResolver {
  constructor(
    private authService: AuthService,
    private ipAddressService: IPAddressLookUpService
  ) {}

  // TODO: [AA-67] Check if already logged and skip the further processing.
  @SkipAuth()
  @Mutation(() => UserAuthInfo)
  async loginWithCreds(
    @Args('email') email: string,
    @Args('password') password: string
  ) {
    return this.authService.loginWithCreds(email, password)
  }

  @Mutation(() => Boolean)
  async logout(@Args('refreshToken') refreshToken: string) {
    return this.authService.logout(refreshToken)
  }

  @Mutation(() => UserAuthInfo)
  async refreshAuth(@Args('refreshToken') refreshToken: string) {
    return this.authService.refreshAuth(refreshToken)
  }

  @SkipAuth()
  @Mutation(() => UserAuthInfo)
  async loginWithGoogle(
    @Args('tokenId') authorizationCode: string,
    @Context() ctx
  ) {
    return this.authService.loginWithGoogle(
      authorizationCode,
      await this.ipAddressService.getCountryOfRequest(ctx)
    )
  }

  // TODO: Create Github Auth
}
