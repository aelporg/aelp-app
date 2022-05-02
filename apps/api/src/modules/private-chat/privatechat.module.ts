import { ModelsModule } from '@aelp-app/models'
import { Module } from '@nestjs/common'
import PrivateChatResolver from './privatechat.resolver'
import PrivateChatService from './privatechat.service'

@Module({
  imports: [ModelsModule],
  providers: [
    PrivateChatResolver,
    PrivateChatService,
  ],
})
export default class PrivateChatModule {}
