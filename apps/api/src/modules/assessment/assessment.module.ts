import { ModelsModule } from '@aelp-app/models'
import { Module } from '@nestjs/common'
import QuestionsModule from '../question/question.module'
import AssessmentAnswerResolver from './assesment-answer.resolver'
import AssessmentResolver from './assessment.resolver'
import AssessmentService from './assessment.service'

@Module({
  imports: [ModelsModule, QuestionsModule],
  providers: [AssessmentService, AssessmentResolver, AssessmentAnswerResolver],
})
export default class AssessmentModule { }
