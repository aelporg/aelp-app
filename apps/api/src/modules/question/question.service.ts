import { PrismaService } from '@aelp-app/models'
import { Injectable } from '@nestjs/common'
import { QuestionType } from '@prisma/client'
import { UserInputError } from 'apollo-server-express'
import { QuestionCreateInput } from './types/question-create-input'
@Injectable()
export default class QuestionService {
  constructor(private prismaService: PrismaService) {}

  async createQuestion(data: QuestionCreateInput) {
    const {
      multipleChoiceQuestion,
      programmingQuestion,
      questionType,
      assessmentId,
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

    const assessment = await this.prismaService.assessment.findUnique({
      where: { id: assessmentId },
    })

    if (!assessment) {
      throw new UserInputError('Assessment not found')
    }

    const commonData = {
      questionType,
      points,
      assessment: { connect: { id: assessment.id } },
    }

    if (questionType === QuestionType.MULTIPLE_CHOICE) {
      return this.prismaService.question.create({
        data: {
          ...commonData,
          multipleChoiceQuestion: {
            create: {
              description: multipleChoiceQuestion.description,
              choices: {
                createMany: {
                  data: multipleChoiceQuestion.choices.map((choice, index) => ({
                    choice: choice,
                    correct:
                      multipleChoiceQuestion.correctChoiceIndex === index,
                  })),
                },
              },
            },
          },
        },
      })
    } else if (questionType === QuestionType.PROGRAMMING) {
      return this.prismaService.question.create({
        data: {
          ...commonData,
          programmingQuestion: {
            create: {
              programmingQuestionType:
                programmingQuestion.programmingQuestionType,
              title: programmingQuestion.title,
              statementMrkdwn: programmingQuestion.statementMrkdwn,
            },
          },
        },
      })
    }

    // const question = {} as (typeof multipleChoiceQuestion & typeof programmingQuestion)
  }
}
