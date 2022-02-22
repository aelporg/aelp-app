import { PrismaService } from '@aelp-app/models'
import { Injectable } from '@nestjs/common'
import { UserInputError } from 'apollo-server-express'
import { ClassroomRole } from '../../global-types'
import { User } from '../user/types/user.model'
import { AssessmentCreateInput } from './types/assessment-create.input'
@Injectable()
export default class AssessmentService {
  constructor(private prismaService: PrismaService) {}

  async createAssessment(data: AssessmentCreateInput, user: User) {
    const { classroomId, ...rest } = data

    if (classroomId) {
      const classroom = await this.prismaService.classroom.findUnique({
        where: { id: classroomId },
        include: { members: { where: { userId: user.id } } },
      })

      if (!classroom) {
        throw new UserInputError('Classroom not found')
      }

      if (
        classroom.members.length < 1 ||
        classroom.members[0].classroomRole === ClassroomRole.STUDENT
      ) {
        throw new UserInputError('You are not a teacher in this classroom')
      }
    }

    return this.prismaService.assessment.create({
      data: {
        ...rest,
        user: { connect: { id: user.id } },
        classroom: classroomId ? { connect: { id: classroomId } } : undefined,
      },
    })
  }
}
