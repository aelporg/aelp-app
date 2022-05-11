import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql'
import { IPAddressLookUpService } from '../../helper-services/IPAdddressLookUp.service'
import { LoggedInUser } from '../../utils/decorators/LoggedInUser'
import { UserService } from './user.service'
import { AuthService } from '../auth/auth.service'
import { UserAuthInfo } from '../auth/types/UserAuthInfo'
import { UserRegisterInput } from './types/user-register-input-type'
import { User } from './types/user.model'
import { ClassroomMember } from '../classroom/types/classroom-member.model'
import SkipAuth from '../auth/helpers/SkipAuth'

@Resolver(() => User)
export default class UserResolver {
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private ipAddressService: IPAddressLookUpService
  ) { }

  @SkipAuth()
  @Mutation(() => UserAuthInfo)
  async register(@Args('data') data: UserRegisterInput, @Context() ctx) {
    const userId = await this.userService.registerUserWithCreds({
      ...data,
      country: await this.ipAddressService.getCountryOfRequest(ctx),
    })

    return this.authService.authorizeWithRefreshToken(userId)
  }

  @Query(() => User)
  me(@LoggedInUser() user: User) {
    return user
  }

  @ResolveField(() => String)
  async name(@Parent() user: User) {
    return user.firstName && user.lastName
      ? `${user.firstName} ${user.lastName}`
      : user.userName
  }

  @ResolveField(() => String)
  async shortName(@Parent() user: User) {
    return user.firstName || user.userName
  }


  @ResolveField(() => ClassroomMember)
  async joinedClassrooms(@Parent() user: User) {
    return this.userService.getUserJoinedClassrooms(user)
  }
}
