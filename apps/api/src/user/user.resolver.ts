import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '@aelp-app/models';
import { UserRegisterDto } from './dto/UserRegisterDto';
import { IPAddressLookUpService } from '../helper-services/IPAdddressLookUp.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/JwtAuthGuard';
import { LoggedInUser } from '../utils/decorators/LoggedInUser';
import { UserService } from './user.service';

@Resolver(() => User)
export default class UserResolver {
  constructor(
    private userService: UserService,
    private ipAddressService: IPAddressLookUpService
  ) {}

  @Mutation(() => Boolean)
  async register(@Args('data') data: UserRegisterDto, @Context() ctx) {
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
}
