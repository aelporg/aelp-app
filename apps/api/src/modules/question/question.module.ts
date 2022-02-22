import { ModelsModule } from '@aelp-app/models'
import { Module } from '@nestjs/common'
import QuestionResolver from './question.resolver'
import QuestionService from './question.service'

@Module({
  imports: [ModelsModule],
  providers: [QuestionService, QuestionResolver],
})
export default class QuestionsModule {}
