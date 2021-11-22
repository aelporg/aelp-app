import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserInputError } from 'apollo-server-express';
import { PrismaService } from '@aelp-app/models';
import { hash } from 'bcrypt';

import { UserRegisterDto } from './dto/UserRegisterDto';
import { IPAddressLookUpService } from '../helper-services/IPAdddressLookUp.service';

@Resolver(() => String)
export default class UserResolver {
  constructor(
    private prismaService: PrismaService,
    private ipAddressService: IPAddressLookUpService
  ) {}

  @Mutation(() => String)
  async register(@Args('data') data: UserRegisterDto, @Context() ctx) {
    if (
      await this.prismaService.user.findUnique({
        where: { userName: data.userName },
      })
    ) {
      throw new UserInputError('User name already exists');
    }

    const ipAddress = ctx.req.socket.remoteAddress;
    let country: string | undefined;

    if (ipAddress) {
      country = await this.ipAddressService.getCountry(ipAddress);
    }

    const hashedPassword = await hash(data.password, 10);

    await this.prismaService.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        userName: data.userName,
        country: {
          connect: {
            countryCode: country || 'PK',
          },
        },
      },
    });

    return 'test';
  }

  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
}
