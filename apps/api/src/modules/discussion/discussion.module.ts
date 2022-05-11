import { ModelsModule } from '@aelp-app/models'
import { Module } from '@nestjs/common'
import DiscussionResponseResolver from './discussion-response.resolver'
import DiscussionResolver from './discussion.resolver'
import DiscussionService from './discussion.service'

@Module({
  imports: [ModelsModule],
  providers: [
    DiscussionResolver,
    DiscussionService, DiscussionResponseResolver
  ],
})
export default class DiscussionModule { }
