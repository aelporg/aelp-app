import { PrismaService, Prisma } from '@aelp-app/models'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { Environment } from '@aelp-app/models'
import { UserInputError } from 'apollo-server-express'
import {
  EnvironmentPermissionLevel,
  ProgrammingQuestionType,
  QuestionType,
} from '../../global-types'
import { User } from '../user/types/user.model'
import PistonService from './piston.service'
import { PistonRuntimeNotFoundError } from '@aelp-app/piston'
import { RunTestCasesOutput } from './types/run-code.output'

@Injectable()
export class EnvironmentService {
  constructor(
    private prismaService: PrismaService,
    private piston: PistonService
  ) { }

  static permissionLevelMap = {
    [EnvironmentPermissionLevel.OWNER]: [
      EnvironmentPermissionLevel.OWNER,
      EnvironmentPermissionLevel.READ_WRITE,
      EnvironmentPermissionLevel.READ,
    ],
    [EnvironmentPermissionLevel.READ_WRITE]: [
      EnvironmentPermissionLevel.READ_WRITE,
      EnvironmentPermissionLevel.READ,
    ],
    [EnvironmentPermissionLevel.READ]: [EnvironmentPermissionLevel.READ],
  }

  getById(id: string): Prisma.Prisma__EnvironmentClient<Environment> {
    return this.prismaService.environment.findUnique({
      where: { id },
    })
  }

  async getEnviromentFiles(id: string) {
    // const environment = await this.getById(id)

    return this.prismaService.environment.findUnique({ where: { id } }).files({
      /*  where: { languageId: environment.languageId } */
    })
  }

  async getUserEnvironments(user: User) {
    return this.prismaService.environment.findMany({
      where: {
        permissions: { some: { userId: user.id } },
      },
    })
  }

  async submit(id: string) {
    const testCaseResult = await this.runTestCases(id);
    const answer = await this.getById(id).answer()

    await this.prismaService.evaluationResult.createMany({
      data: testCaseResult.map(each => ({
        evaluationCriteriaId: each.criteria.id,
        evaulationPoints: each.status === "PASSED" ? each.criteria.totalPoints : 0,
        programmingQuestionAnswerId: answer.id,
      }))
    })

    const programmingQuestionAnswer = await this.prismaService.programmingQuestionAnswer.findFirst({
      where: {
        envirnmentId: id,
      },
      include: {
        baseAnswer: true,
      }
    })

    await this.prismaService.questionAnswer.update({
      where: {
        id: programmingQuestionAnswer.baseAnswer.id,
      },
      data: {
        points: testCaseResult.reduce(
          (prev, cur) => {
            return prev + cur.status === "PASSED" ? cur.criteria.totalPoints : 0
          },
          0,
        )
      }
    })

    await this.prismaService.environment.update({ where: { id: answer.envirnmentId }, data: { submitted: true } })

    return true
  }

  async runTestCases(id: string) {
    const testCases = await this.getById(id).answer().baseAnswer().question().programmingQuestion().evaluationCriterias({
      include: { inputOutputEvalCrit: true }
    })

    const result: RunTestCasesOutput[] = []

    for (const testCase of testCases) {
      if (testCase.type === "INPUT_OUTPUT") {
        const output = await this.runCode(id, testCase.inputOutputEvalCrit.inputs);

        result.push({
          criteria: testCase,
          output,
          status: output.run.code === 0 ? output.run.stdout !== testCase.inputOutputEvalCrit.outputs ? 'FAILED' : 'PASSED' : 'ERROR'
        })
      }
    }

    return result
  }

  async runCode(id: string, input = '') {
    const env = await this.getById(id)
    const files = await this.getById(id).files({
      include: { language: true },
      where: { languageId: env.languageId },
    })

    if (files && files.length > 0) {
      const file = files[0]
      const code = file.data
      const language = file.language

      try {
        const result = await this.piston.client.execute(language.name.toLowerCase(), code, input)

        return result
      } catch (e) {
        if (e instanceof PistonRuntimeNotFoundError) {
          this.piston.client
            .install(language.compilerPackageName, language.version)
            .then(e => {
              console.log('Installed', e)
            })
        }

        throw e
      }
    }

    throw new Error('No files found')
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
              include: { defaultCodes: { include: { language: true } } },
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
      programmingQuestion.singleFileProgrammingQuestion.defaultCodes.length <
      1 &&
      programmingQuestion.programmingQuestionType ===
      ProgrammingQuestionType.SINGLE_FILE
    )
      throw new Error('Aw :(')

    const files =
      programmingQuestion.programmingQuestionType ===
        ProgrammingQuestionType.MULTIPLE_FILE
        ? {
          createMany: {
            data: programmingQuestion.multipleFilesProgrammingQuestion.defaultFiles.map(
              file => ({
                name: file.name,
                data: file.data,
                languageId: file.languageId,
              })
            ),
          },
        }
        : {
          createMany: {
            data: programmingQuestion.singleFileProgrammingQuestion.defaultCodes.map(
              code => ({
                name: code.language.defaultFileName,
                data: code.defaultCode || code.language.defaultCode,
                languageId: code.languageId,
              })
            ),
          },
        }

    const defaultLanguageId =
      programmingQuestion.singleFileProgrammingQuestion?.defaultCodes[0]?.languageId ||
      programmingQuestion.multipleFilesProgrammingQuestion.languageId

    if (!defaultLanguageId) throw new Error('No default language')

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
                files,
                language: {
                  connect: {
                    id: defaultLanguageId,
                  },
                },
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
        answer: {
          select: {
            baseAnswer: {
              select: {
                question: {
                  select: {
                    programmingQuestion: {
                      select: {
                        programmingQuestionType: true,
                        singleFileProgrammingQuestion: {
                          select: {
                            defaultCodes: { include: { language: true } },
                          },
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

    if (!environment.answer) return []

    const { programmingQuestion } = environment.answer.baseAnswer.question

    return programmingQuestion.programmingQuestionType ===
      ProgrammingQuestionType.MULTIPLE_FILE
      ? [programmingQuestion.multipleFilesProgrammingQuestion.language]
      : programmingQuestion.singleFileProgrammingQuestion.defaultCodes.map(
        code => code.language
      )
  }

  async getUserEnvPermission(environmentId: string, user: User) {
    const permissions = await this.getEnvPermissions(environmentId)

    if (!permissions) return null

    return permissions.find(permission => permission.userId === user.id)
  }

  async hasPermission(
    environmentId: string,
    user: User,
    permission: EnvironmentPermissionLevel
  ) {
    const permissionLevel = await this.getUserEnvPermission(environmentId, user)

    if (!permissionLevel) return false

    return EnvironmentService.permissionLevelMap[
      permissionLevel.permission
    ].includes(permission)
  }

  async getEnvPermissions(environmentId: string) {
    return this.getById(environmentId).permissions()
  }

  async changeLanguage(environmentId: string, languageId: string, user: User) {
    if (
      !(await this.hasPermission(
        environmentId,
        user,
        EnvironmentPermissionLevel.READ_WRITE
      ))
    )
      throw new UnauthorizedException(
        'User does not have permission to change language'
      )

    const allowedLanguages = await this.allowedLanguages(environmentId)
    const requestedLanguage = allowedLanguages.find(
      language => language.id === languageId
    )

    if (!requestedLanguage)
      throw new UserInputError(
        'Language is not allowed for this programming question'
      )

    await this.prismaService.$transaction(async () => {
      const files = await this.prismaService.environment
        .update({
          where: { id: environmentId },
          data: { language: { connect: { id: languageId } } },
        })
        .files()

      if (files.find(file => file.languageId === languageId)) {
        return
      }

      await this.prismaService.file.create({
        data: {
          name: requestedLanguage.defaultFileName,
          data: requestedLanguage.defaultCode,
          language: {
            connect: {
              id: languageId,
            },
          },
          environment: {
            connect: {
              id: environmentId,
            },
          },
        },
      })
    })

    return this.getById(environmentId)
  }
}
