import { ModelsModule } from '@aelp-app/models'
import { Module } from '@nestjs/common'
import DiscussionResolver from './discussion.resolver'
import DiscussionService from './discussion.service'

@Module({
  imports: [ModelsModule],
  providers: [
    DiscussionResolver,
    DiscussionService,
  ],
})
export default class DiscussionModule {}
