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
import { UserRegisterDtoWithPassword } from '@aelp-app/validators';

@Resolver(() => User)
export default class UserResolver {
  constructor(
    private userService: UserService,
    private ipAddressService: IPAddressLookUpService
  ) {}

  @Mutation(() => Boolean)
  async register(
    @Args('data') data: UserRegisterDtoWithPassword,
    @Context() ctx
  ) {
    return this.userService.registerUserWithCreds({
      ...data,
      country: await this.ipAddressService.getCountryOfRequest(ctx),
    });
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
