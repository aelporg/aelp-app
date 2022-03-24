import { ModelsModule } from '@aelp-app/models'
import { Module } from '@nestjs/common'
import CompetitionService from './competition.service'

@Module({
  imports: [ModelsModule],
  providers: [
    CompetitionService
  ],
})
export default class CompetitionModule {}
