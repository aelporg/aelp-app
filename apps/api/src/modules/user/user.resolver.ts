import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { ClassroomMember, User } from '@aelp-app/models';
import { IPAddressLookUpService } from '../../helper-services/IPAdddressLookUp.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/JwtAuthGuard';
import { LoggedInUser } from '../../utils/decorators/LoggedInUser';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';
import { UserAuthInfo } from '../auth/dto/UserAuthInfo';
import { UserRegisterInput } from './user-register-input-type';

@Resolver(() => User)
export default class UserResolver {
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private ipAddressService: IPAddressLookUpService
  ) {}

  @Mutation(() => UserAuthInfo)
  async register(
    @Args('data') data: UserRegisterInput,
    @Context() ctx
  ) {
    const userId = await this.userService.registerUserWithCreds({
      ...data,
      country: await this.ipAddressService.getCountryOfRequest(ctx),
    });

    return this.authService.authorizeWithRefreshToken(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => User)
  me(@LoggedInUser() user: User) {
    return user;
  }

  @UseGuards(JwtAuthGuard)
  @ResolveField(type => ClassroomMember)
  async joinedClassrooms(@Parent() user: User) {
    return this.userService.getUserJoinedClassrooms(user);
  }
}
