import { PrismaService, Prisma } from '@aelp-app/models';
import { Injectable } from '@nestjs/common';
import { UserInputError } from 'apollo-server-express';
import { hash } from 'bcrypt';
import { IPAddressLookUpService } from '../../helper-services/IPAdddressLookUp.service';
import { UserRegisterDto } from './dto/UserRegisterDto';

interface RegisterUserArgs extends UserRegisterDto {
  country?: string;
}

@Injectable()
export class UserService {
  constructor(
    private prismaService: PrismaService,
    private ipAddressService: IPAddressLookUpService
  ) {}

  private static UserDefaultSelect: Prisma.UserSelect = {
    userName: true,
    email: true,
    country: true,
    firstName: true,
    lastName: true,
    id: true,
    role: true,
  };

  async registerUserWithCreds(data: RegisterUserArgs) {
    if (
      await this.prismaService.user.findUnique({
        where: { userName: data.userName },
      })
    ) {
      throw new UserInputError('User name already exists');
    }

    const hashedPassword = await hash(data.password, 10);

    await this.prismaService.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        userName: data.userName,
        country: {
          connect: {
            countryCode: data.country || 'PK',
          },
        },
      },
    });

    return true;
  }

  async getUserById(id: string) {
    return this.prismaService.user.findUnique({
      where: { id },
      select: { ...UserService.UserDefaultSelect },
    });
  }
}
