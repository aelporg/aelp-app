import { ModelsModule } from '@aelp-app/models'
import { Module } from '@nestjs/common'
import CompetitionResolver from './competition.resolver'
import CompetitionService from './competition.service'

@Module({
  imports: [ModelsModule],
  providers: [
    CompetitionResolver,
    CompetitionService
  ],
})
export default class CompetitionModule {}
