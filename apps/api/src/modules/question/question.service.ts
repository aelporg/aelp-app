import { PrismaService } from '@aelp-app/models'
import { Injectable } from '@nestjs/common'
import { Prisma, Question, QuestionType } from '@aelp-app/models'
import { UserInputError } from 'apollo-server-express'
import { QuestionCreateInput } from './types/question-create-input'
@Injectable()
export default class QuestionService {
  constructor(private prismaService: PrismaService) {}

  getById(id: string): Prisma.Prisma__QuestionClient<Question> {
    return this.prismaService.question.findUnique({
      where: { id },
    })
  }

  transformQuestionToCreateQuery(data: QuestionCreateInput): {
    questionType: QuestionType
    points: number
    multipleChoiceQuestion?: Prisma.MultipleChoiceQuestionCreateWithoutBaseQuestionInput
    programmingQuestion?: Prisma.ProgrammingQuestionCreateWithoutBaseQuestionInput
  } {
    const {
      multipleChoiceQuestion,
      programmingQuestion,
      questionType,
      points,
    } = data

    if (
      questionType === QuestionType.MULTIPLE_CHOICE &&
      !multipleChoiceQuestion
    ) {
      throw new UserInputError('Multiple choice question is missing')
    }

    if (questionType === QuestionType.PROGRAMMING && !programmingQuestion) {
      throw new UserInputError('Programming question is missing')
    }

    const commonData = {
      questionType,
      points,
    }

    if (questionType === QuestionType.MULTIPLE_CHOICE) {
      return {
        ...commonData,
        multipleChoiceQuestion: {
          description: multipleChoiceQuestion.description,
          choices: {
            createMany: {
              data: multipleChoiceQuestion.choices.map((choice, index) => ({
                choice: choice,
                correct: multipleChoiceQuestion.correctChoiceIndex === index,
              })),
            },
          },
        },
      }
    } else if (questionType === QuestionType.PROGRAMMING) {
      return {
        ...commonData,
        programmingQuestion: {
          programmingQuestionType: programmingQuestion.programmingQuestionType,
          statementMrkdwn: programmingQuestion.statementMrkdwn,
          title: programmingQuestion.title,
          singleFileProgrammingQuestion: {
            create: {
              defaultCodes: {
                createMany: {
                  data: programmingQuestion.singleFileProgrammingQuestion
                    .defaultCodes,
                },
              },
            },
          },
        },
      }
    }
  }
}
