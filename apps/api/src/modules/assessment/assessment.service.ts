import {PrismaService} from '@aelp-app/models'
import { AssessmentCreateInput } from './types/assessment-create.input'

export default class AssessmentService {
  constructor(private prismaService: PrismaService) {}

  createAssessment(data: AssessmentCreateInput) {
    return this.prismaService.assessment.create({ data })
  }

  addQuestion(assessmentId: string, questionId: string) {
    return this.prismaService.assessment.update({
      where: { id: assessmentId },
      data: {
        questions: {
          connect: { id: questionId },
        },
      },
    })
  }
}
