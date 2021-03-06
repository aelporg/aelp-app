import { PrismaService, Prisma, Assessment } from '@aelp-app/models'
import { Injectable } from '@nestjs/common'
import { UserInputError } from 'apollo-server-express'
import { ClassroomRole } from '../../global-types'
import QuestionService from '../question/question.service'
import { User } from '../user/types/user.model'
import { AssessmentCreateInput } from './types/assessment-create.input'
@Injectable()
export default class AssessmentService {
  constructor(
    private prismaService: PrismaService,
    private questionService: QuestionService
  ) { }

  async createAssessment(data: AssessmentCreateInput, user: User) {
    const { classroomId, questions, ...rest } = data

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

    return this.prismaService.$transaction(async prisma => {

      const questionsTransformed = await Promise.all(questions.map((data) => {
        return this.questionService.transformQuestionToCreateQuery(data)
      }))

      const questionsIds = []
      for (const question of questionsTransformed) {
        const { programmingQuestion, multipleChoiceQuestion, ...rest } =
          question


        const createdQuestion = await prisma.question.create({
          data: { ...rest },
        })

        if (programmingQuestion) {
          await prisma.programmingQuestion.create({
            data: {

              ...programmingQuestion,
              baseQuestion: { connect: { id: createdQuestion.id } },
            },
          })
        } else if (multipleChoiceQuestion) {
          await prisma.multipleChoiceQuestion.create({
            data: {
              ...multipleChoiceQuestion,
              baseQuestion: { connect: { id: createdQuestion.id } },
            },
          })
        }

        questionsIds.push(createdQuestion.id)
      }

      return prisma.assessment.create({
        data: {
          ...rest,
          questions: {
            connect: questionsIds.map(id => ({ id })),
          },
          user: { connect: { id: user.id } },
          classroom: classroomId ? { connect: { id: classroomId } } : undefined,
        },
      })
    })
  }

  getAssessmentFindUniqueClient(id: string): Prisma.Prisma__AssessmentClient<Assessment> {
    return this.prismaService.assessment.findUnique({ where: { id } })
  }

  async getAssessment(id: string, user: User) {
    return this.prismaService.assessment.findFirst({
      where: {
        id,
        classroom: {
          members: {
            some: {
              userId: user.id,
            }
          }
        }
      }
    })
  }

  async getAssessments(
    classroomId: string,
    user: User,
  ) {
    return this.prismaService.assessment.findMany({
      where: {
        classroom: {
          id: classroomId,
          members: {
            some: {
              userId: user.id,
            }
          }
        }
      }
    })
  }
}
