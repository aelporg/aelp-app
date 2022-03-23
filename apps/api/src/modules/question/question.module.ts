import { ModelsModule } from '@aelp-app/models'
import { Module } from '@nestjs/common'
import ProgrammingQuestionAnswerResolver from './programming-question-answer.resolver'
import QuestionAnswerResolver from './question-answer.resolver'
import QuestionAnswerService from './question-answer.service'
import QuestionResolver from './question.resolver'
import QuestionService from './question.service'
import { QuestionAnswer } from './types/question-answer.model'

@Module({
  imports: [ModelsModule],
  providers: [
    QuestionService,
    QuestionResolver,
    ProgrammingQuestionAnswerResolver,
    QuestionAnswerResolver,
    QuestionAnswerService,
  ],
  exports: [QuestionService],
})
export default class QuestionsModule {}
