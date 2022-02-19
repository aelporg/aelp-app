import { PrismaService, Prisma } from '@aelp-app/models'
import { Injectable } from '@nestjs/common'
import { UserInputError } from 'apollo-server-express'
import {
  EnvironmentPermissionLevel,
  ProgrammingQuestionType,
  QuestionType,
} from '../../global-types'
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
        programmingQuestion: {
          include: {
            multipleFilesProgrammingQuestion: {
              include: { defaultFiles: true, language: true },
            },
            singleFileProgrammingQuestion: {
              include: { allowedLanguages: true },
            },
          },
        },
        answers: {
          include: {
            programmingQuestionAnswer: true,
          },
          where: {
            userId: user.id,
          },
        },
      },
    })

    if (!question) return null

    if (question.answers.length > 0) {
      return this.getById(
        question.answers[0].programmingQuestionAnswer.envirnmentId
      )
    }

    if (question.questionType !== QuestionType.PROGRAMMING) {
      throw new UserInputError(
        'A envirnoment cannot be created for question other than programming question'
      )
    }

    // TODO: [AA-64] Handle multiple file programming questions
    const { programmingQuestion } = question

    if (
      programmingQuestion.singleFileProgrammingQuestion.allowedLanguages
        .length < 1 &&
      programmingQuestion.programmingQuestionType ===
        ProgrammingQuestionType.SINGLE_FILE
    )
      throw new Error('No language available')

    const files =
      programmingQuestion.programmingQuestionType ===
      ProgrammingQuestionType.MULTIPLE_FILE
        ? {
            createMany: {
              data: programmingQuestion.multipleFilesProgrammingQuestion.defaultFiles.map(
                file => ({
                  name: file.name,
                  data: file.data,
                })
              ),
            },
          }
        : {
            create: {
              name: `main.${programmingQuestion.singleFileProgrammingQuestion.allowedLanguages[0].extension}`,
              data: programmingQuestion.singleFileProgrammingQuestion
                .defaultCode,
            },
          }

    const answer = this.prismaService.questionAnswer.create({
      data: {
        question: {
          connect: {
            id: question.id,
          },
        },
        programmingQuestionAnswer: {
          create: {
            envirnment: {
              create: {
                scratchPadData: '{}',
                // TODO: FIX THIS
                // files: {createMany:{data:}},
                permissions: {
                  create: {
                    permission: EnvironmentPermissionLevel.OWNER,
                    user: {
                      connect: {
                        id: user.id,
                      },
                    },
                  },
                },
              },
            },
          },
        },
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
            },
          },
        },
      },
    })

    return this.getById((await answer.programmingQuestionAnswer()).envirnmentId)
  }

  async allowedLanguages(environmentId: string) {
    const environment = await this.prismaService.environment.findUnique({
      where: { id: environmentId },
      include: {
        answers: {
          select: {
            baseAnswer: {
              select: {
                question: {
                  select: {
                    programmingQuestion: {
                      select: {
                        programmingQuestionType: true,
                        singleFileProgrammingQuestion: {
                          select: { allowedLanguages: true },
                        },
                        multipleFilesProgrammingQuestion: {
                          select: { language: true },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    })

    if (environment.answers.length < 1) return []

    const { programmingQuestion } = environment.answers[0].baseAnswer.question

    return programmingQuestion.programmingQuestionType ===
      ProgrammingQuestionType.MULTIPLE_FILE
      ? [programmingQuestion.multipleFilesProgrammingQuestion.language]
      : programmingQuestion.singleFileProgrammingQuestion.allowedLanguages
  }

  async getUserEnvPermission(environmentId: string, user: User) {
    const permissions = await this.getEnvPermissions(environmentId)

    return permissions.find(permission => permission.userId === user.id)
  }

  async getEnvPermissions(environmentId: string) {
    return this.prismaService.environment
      .findUnique({
        where: { id: environmentId },
      })
      .permissions()
  }
}
