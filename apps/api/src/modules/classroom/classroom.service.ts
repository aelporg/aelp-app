import { PrismaService } from '@aelp-app/models'
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common'
import { UserInputError } from 'apollo-server-errors'
import { generate } from 'randomstring'
import { Prisma } from '@aelp-app/models'
import { CreateClassroomInput } from './types/create-classroom-input-type'
import { User } from '../user/types/user.model'
import { ClassroomRole } from '../../global-types/classroom-role.enum'
import { Classroom } from '@prisma/client'

export class ClassroomInviteCodeGenError extends Error {
  constructor() {
    super('Invite code for classroom cannot be generated in time.')
  }
}

@Injectable()
export default class ClassroomService {
  constructor(private prismaService: PrismaService) {}

  async getUserClassrooms(user: User) {
    return this.prismaService.classroom.findMany({
      where: { members: { some: { userId: user.id } } },
    })
  }

  getClassroomById(id: string): Prisma.Prisma__ClassroomClient<Classroom> {
    return this.prismaService.classroom.findUnique({
      where: { id },
    })
  }

  async getClassroomInviteCode(classroomId: string, user: User) {
    const memberRecord = await this.getClassroomById(classroomId).members({
      where: { userId: user.id },
    })

    if (memberRecord.length < 1 || memberRecord[0].classroomRole === ClassroomRole.STUDENT) return null;

    return (await this.getClassroomById(classroomId)).inviteCode
  }

  async generateUniqueInviteCode(retryNo = 0) {
    const inviteCode = generate({ length: 8, charset: 'alphanumeric' })

    const classroomWithGeneratedCode =
      await this.prismaService.classroom.findUnique({
        where: { inviteCode },
        select: { id: true },
      })

    if (classroomWithGeneratedCode) {
      if (retryNo < 10) return this.generateUniqueInviteCode(retryNo + 1)
      else throw new ClassroomInviteCodeGenError()
    }

    return inviteCode
  }

  async joinClassroom(inviteCode: string, user: User) {
    const classroom = await this.prismaService.classroom.findUnique({
      where: { inviteCode },
    })

    if (!classroom) {
      throw new UserInputError(
        "This invite code doesn't belong to any Classroom"
      )
    }

    try {
      await this.prismaService.classroomMember.create({
        data: {
          classroom: { connect: { id: classroom.id } },
          user: { connect: { id: user.id } },
          classroomRole: ClassroomRole.STUDENT,
        },
      })
    } catch (e: unknown) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        switch (e.code) {
          case 'P2002':
            throw new UserInputError(
              'You are already a member of this classroom'
            )
        }
      }

      throw e
    }

    return classroom
  }

  async createClassroom(data: CreateClassroomInput, user: User) {
    const inviteCode = await this.generateUniqueInviteCode()

    return this.prismaService.classroom.create({
      data: {
        ...data,
        inviteCode: inviteCode,
        members: {
          create: [
            {
              user: { connect: { id: user.id } },
              classroomRole: ClassroomRole.OWNER,
            },
          ],
        },
      },
    })
  }

  // This is specific to classroom, as we are getting announcements of a particular class
  async getAnnoucements(classroomId: string) {
    return this.prismaService.classroom
      .findUnique({
        where: { id: classroomId },
      })
      .announcements()
  }
}
