import { ModelsModule } from '@aelp-app/models'
import { Module } from '@nestjs/common'
import QuestionService from './question.service'

@Module({
  imports: [ModelsModule],
  providers: [QuestionService],
})
export default class QuestionsModule {}
