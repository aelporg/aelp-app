import { PrismaService } from '@aelp-app/models'
import { Injectable } from '@nestjs/common'
import { Prisma, QuestionAnswer } from '@aelp-app/models'

@Injectable()
export default class QuestionAnswerService {
  constructor(private prismaService: PrismaService) {}

  getById(id: string): Prisma.Prisma__QuestionAnswerClient<QuestionAnswer> {
    return this.prismaService.questionAnswer.findUnique({
      where: { id },
    })
  }
}
