import { PrismaService, Prisma } from '@aelp-app/models'
import { Injectable } from '@nestjs/common'
import { hash } from 'bcrypt'
import { TokenPayload } from 'google-auth-library'
import { generateUsername } from 'unique-username-generator'
import { UserRegisterInput } from './types/user-register-input-type'
import { User } from './types/user.model'

interface RegisterUserArgs extends UserRegisterInput {
  country?: string
}

export const userNameRegex = /^[a-zA-Z_][a-zA-Z0-9]{4,15}$/

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async registerUserWithCreds(data: RegisterUserArgs) {
    return this.prismaService.$transaction(async () => {
      const userName = await this.generateUserName(data.email)

      const hashedPassword = await hash(data.password, 10)

      if (
        await this.prismaService.user.findUnique({
          where: { email: data.email },
        })
      ) {
        throw new Error('Email already exists')
      }

      const { id } = await this.prismaService.user.create({
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
      })

      return id
    })
  }

  async generateUserName(email: string) {
    let userName = email.split('@')[0]

    if (!userName.match(userNameRegex)) {
      userName = generateUsername('', 3, 7)
    }

    let tries = 0

    while (tries < 3) {
      const user = await this.prismaService.user.findUnique({
        where: { userName },
      })

      if (!user) {
        break
      }

      userName = generateUsername('-', 3, 13)
      tries++
    }

    return userName
  }

  async registerUserWithGoogle(payload: TokenPayload, country: string) {
    if (
      await this.prismaService.user.findUnique({
        where: { email: payload.email },
      })
    ) {
      throw new Error(`Email ${payload.email} already exists, please proceed to login with password`)
    }

    const userName = await this.generateUserName(payload.email)

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
    })
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.prismaService.user.findUnique({
      where: { id },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        userName: true,
        email: true,
        countryId: true,
        role: true,
        updatedAt: true,
        createdAt: true,
      },
    })

    if (!user) return null

    return user
  }

  async getUserJoinedClassrooms(user: User) {
    return this.prismaService.user
      .findUnique({
        where: { id: user.id },
      })
      .joinedClassrooms()
  }
}
