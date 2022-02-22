import { ModelsModule } from '@aelp-app/models'
import { Module } from '@nestjs/common'
import AssessmentResolver from './assessment.resolver'
import AssessmentService from './assessment.service'

@Module({
  imports: [ModelsModule],
  providers: [AssessmentService, AssessmentResolver],
})
export default class AssessmentModule {}
