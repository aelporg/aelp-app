import { ModelsModule } from '@aelp-app/models'
import { Module } from '@nestjs/common'
import MultipleChoiceQuestionResolver from './multiple-choice-question.resolver'
import ProgrammingQuestionAnswerResolver from './programming-question-answer.resolver'
import QuestionAnswerResolver from './question-answer.resolver'
import QuestionAnswerService from './question-answer.service'
import QuestionResolver from './question.resolver'
import QuestionService from './question.service'

@Module({
  imports: [ModelsModule],
  providers: [
    QuestionService,
    QuestionResolver,
    ProgrammingQuestionAnswerResolver,
    QuestionAnswerResolver,
    QuestionAnswerService,
    MultipleChoiceQuestionResolver,
  ],
  exports: [QuestionService],
})
export default class QuestionsModule {}
