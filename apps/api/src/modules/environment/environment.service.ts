import { PrismaService } from '@aelp-app/models'
import { Injectable } from '@nestjs/common'
import { UserInputError } from 'apollo-server-express'
import { ProgrammingQuestionType, QuestionType } from '../../global-types'
import { User } from '../user/types/user.model'

@Injectable()
export class EnvironmentService {
  constructor(private prismaService: PrismaService) {}

  async getById(id: string) {
    return this.prismaService.environment.findUnique({
      where: { id },
    })
  }

  async getEnviromentFiles(id: string) {
    return this.prismaService.environment.findUnique({ where: { id } }).files()
  }

  async getUserEnvironments(user: User) {
    return this.prismaService.environment.findMany({
      where: {
        permissions: { some: { userId: user.id } },
      },
    })
  }

  async createEnvirnment(questionId: string, user: User) {
    const question = await this.prismaService.question.findUnique({
      where: { id: questionId },
      include: {
        multipleChoiceQuestion: true,
        programmingQuestion: true,
        answers: {
          include: {
            programmingQuestionAnswer: true,
          },
          where: {
            userId: user.id,
          }
        },
      },
    })

    if (!question) return null

    if (question.answers.length > 0) {
      return this.getById(question.answers[0].programmingQuestionAnswer.envirnmentId);
    }

    if (question.questionType !== QuestionType.PROGRAMMING) {
      throw new UserInputError(
        'A envirnoment cannot be created for question other than programming question'
      )
    }

    // TODO: [AA-64] Handle multiple file programming questions
    const { programmingQuestion } = question
    // programmingQuestion.programmingQuestionType === ProgrammingQuestionType.SINGLE_FILE

    return this.prismaService.questionAnswer.create({
      data: {
        question: {
          connect: {
            id: question.id,
          },
        },
        programmingQuestionAnswer: {
          connectOrCreate: {
            create: { envirnment: { create: { scratchPadData: '{}' } } },
            where: {},
          },
        },
        points: 0,
        assessmentSubmission: {
          connectOrCreate: {
            where: {
              assessmentId_userId: {
                assessmentId: question.assessmentId,
                userId: user.id,
              },
            },
            create: {
              assessment: {
                connect: {
                  id: question.assessmentId,
                },
              },
              user: {
                connect: {
                  id: user.id,
                },
              },
              recPoints: 0,
            },
          },
        },
      },
    })
  }

  async getUserEnvPermission(environmentId: string, user: User) {
    const permissions = await this.prismaService.environment
      .findUnique({
        where: { id: environmentId },
      })
      .permissions()

    return permissions.find(permission => permission.userId === user.id)
  }
}
