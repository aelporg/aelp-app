import { PrismaService } from '@aelp-app/models'
import { Injectable } from '@nestjs/common'
import { UserInputError } from 'apollo-server-errors'
import { generate } from 'randomstring'
import { Prisma } from '@aelp-app/models'
import { CreateClassroomInput } from './types/create-classroom-input-type'
import { User } from '../user/types/user.model'
import { ClassroomRole } from '../../global-types/classroom-role.enum'
import { Classroom } from '@aelp-app/models'

export class ClassroomInviteCodeGenError extends Error {
  constructor() {
    super('Invite code for classroom cannot be generated in time.')
  }
}

@Injectable()
export default class ClassroomService {
  constructor(private prismaService: PrismaService) { }

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

    if (
      memberRecord.length < 1 ||
      memberRecord[0].classroomRole === ClassroomRole.STUDENT
    )
      return null

    return (await this.getClassroomById(classroomId)).inviteCode
  }

  async generateUniqueInviteCode(retryNo = 0) {
    const inviteCode = generate({ length: 6, charset: 'alphanumeric' })

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

  async changeClassroomRole(
    classroomId: string,
    userId: string,
    memberId: string,
    role: string) {

    //get user from the classroom
    const memberInAction = await this.prismaService.classroomMember.findUnique({
      where: { classroomId, userId },
    })

    //check if user exists in the classroom
    if (!memberInAction) {
      throw new UserInputError(
        'You are not a member of this classroom'
      )
    }

    //check if user is owner of the classroom
    if (memberInAction.classroomRole !== ClassroomRole.OWNER) {
      throw new UserInputError(
        'You are not the owner of this classroom'
      )
    }

    //get member from the classroom
    const ifMemberExist = await this.prismaService.classroomMember.findUnique({
      where: { classroomId, userId: memberId },
    })

    //check if member exists in the classroom
    if (!ifMemberExist) {
      throw new UserInputError(
        'This user is not a member of this classroom'
      )
    }

    //update member role
    return this.prismaService.classroomMember.update({
      where: { classroomId, userId },
      data: { classroomRole: role.toUpperCase() },
    })
  }

  async removeMember(
    classroomId: string,
    userId: string,
    memberId: string) {

    //get member who tries to remove someone from the classroom
    const memberInAction = await this.prismaService.classroomMember.findUnique({
      where: { classroomId, userId },
    })

    //check if member exists in the classroom
    if (!memberInAction) {
      throw new UserInputError(
        'You are not a member of this classroom'
      )
    }

    //check if any member tries to remove himself
    if (memberInAction.userId === memberId) {
      return this.prismaService.classroomMember.delete({
        where: { classroomId, userId: memberId },
      })
    }

    //check if member is a student of the classroom
    //student is not allowed to remove anyone but himself
    if (memberInAction.classroomRole === ClassroomRole.STUDENT) {
      throw new UserInputError(
        'You are not the owner or instructor of this classroom'
      )
    }

    //get member who is being removed from the classroom
    const memberToRemove = await this.prismaService.classroomMember.findUnique({
      where: { classroomId, userId: memberId },
    })

    //check if memberToRemove exists in the classroom
    if (!memberToRemove) {
      throw new UserInputError(
        'This user is not a member of this classroom'
      )
    }

    //check if instructor tries to remove owner
    //instructor is not allowed to remove owner
    if (memberToRemove.classroomRole === ClassroomRole.OWNER
      && memberInAction.classroomRole === ClassroomRole.INSTRUCTOR) {
      throw new UserInputError(
        'You are not allowed to remove the owner of the classroom'
      )
    }

    //check if instructor tries to remove another instructor
    //instructor is not allowed to remove another instructor
    if (memberToRemove.classroomRole === ClassroomRole.INSTRUCTOR
      && memberInAction.classroomRole === ClassroomRole.INSTRUCTOR) {
      throw new UserInputError(
        'You are not allowed to remove any instructor of the classroom'
      )
    }

    //remove member from the classroom
    return this.prismaService.classroomMember.delete({
      where: { classroomId, userId: memberId },
    })
  }

  // This is specific to classroom, as we are getting announcements of a particular class
  async getAnnoucements(classroomId: string) {
    return this.prismaService.classroom
      .findUnique({
        where: { id: classroomId },
      })
      .announcements({ orderBy: [{ createdAt: 'desc' }] })
  }
}
