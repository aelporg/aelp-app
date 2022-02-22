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

export const userNameRegex = /^[a-zA-Z_][a-zA-Z0-9]{4,10}$/

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async registerUserWithCreds(data: RegisterUserArgs) {
    return this.prismaService.$transaction(async () => {
      let userName = await this.generateUserName(data.email)

      const hashedPassword = await hash(data.password, 10)
      try {
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
      } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
          if (e.code === 'P2002') {
            throw new Error(
              `User with this ${(e.meta as any).target?.[0]} already exists.`
            )
          }
        }
        throw e
      }
    })
  }

  async generateUserName(email: string) {
    let userName = email.split('@')[0]

    if (!userName.match(userNameRegex)) {
      userName = generateUsername('', 3, 7)
    }

    let tries = 0,
      foundUnqiueUserName = false

    while (tries < 3) {
      const user = await this.prismaService.user.findUnique({
        where: { userName },
      })

      if (!user) {
        foundUnqiueUserName = true
        break
      }

      userName = generateUsername('', 3, 7)
      tries++
    }

    return userName
  }

  async registerUserWithGoogle(payload: TokenPayload, country: string) {
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
    })

    if (!user) return null;

    return {
      ...user,
      name:
        user.firstName && user.lastName
          ? `${user.firstName} ${user.lastName}`
          : user.userName,
      shortName: user.firstName || user.userName,
    }
  }

  async getUserJoinedClassrooms(user: User) {
    return this.prismaService.user
      .findUnique({
        where: { id: user.id },
      })
      .joinedClassrooms()
  }
}
