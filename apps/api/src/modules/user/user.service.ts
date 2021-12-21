import { PrismaService, User } from '@aelp-app/models';
import { UserRegisterDtoWithPassword } from '@aelp-app/validators';
import { Injectable } from '@nestjs/common';
import { UserInputError } from 'apollo-server-express';
import { hash } from 'bcrypt';
import { TokenPayload } from 'google-auth-library';
import { generateUsername } from 'unique-username-generator';

interface RegisterUserArgs extends UserRegisterDtoWithPassword {
  country?: string;
}

export const userNameRegex = /^[a-zA-Z_][a-zA-Z0-9]{4,10}$/;

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async registerUserWithCreds(data: RegisterUserArgs) {
    return this.prismaService.$transaction(async () => {
      let userName = await this.generateUserName(data.email);

      const hashedPassword = await hash(data.password, 10);

      await this.prismaService.user.create({
        data: {
          email: data.email,
          password: hashedPassword,
          userName,
          country: {
            connect: {
              countryCode: data.country || 'PK',
            },
          },
        },
      });

      return true;
    });
  }

  async generateUserName(email: string) {
    const userName = email.split('@')[0];

    if (!userName.match(userNameRegex)) {
      return generateUsername('', 3, 7);
    }

    let tries = 0,
      foundUnqiueUserName = false;
    while (tries < 3) {
      const user = await this.prismaService.user.findUnique({
        where: { userName },
      });

      if (!user) {
        foundUnqiueUserName = true;
        break;
      }

      tries++;
    }

    return userName;
  }

  async registerUserWithGoogle(payload: TokenPayload, country: string) {
    const userName = await this.generateUserName(payload.email);

    return this.prismaService.user.create({
      data: {
        email: payload.email,
        firstName: payload.given_name,
        lastName: payload.family_name,
        linkedAccounts: {
          create: [
            {
              externalId: payload.sub,
              provider: { connect: { name: 'google' } },
            },
          ],
        },
        userName,
        country: {
          connect: {
            countryCode: country || 'PK',
          },
        },
      },
    });
  }

  async getUserById(id: string) {
    return this.prismaService.user.findUnique({
      where: { id },
    });
  }

  async getUserJoinedClassrooms(user: User) {
    return this.prismaService.user
      .findUnique({
        where: { id: user.id },
      })
      .joinedClassrooms();
  }
}
