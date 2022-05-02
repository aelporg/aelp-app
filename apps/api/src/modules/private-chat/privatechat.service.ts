import { PrismaService } from '@aelp-app/models'
import { Prisma } from '@aelp-app/models'
import { Injectable } from '@nestjs/common'
import { User } from '../user/types/user.model'
import { PrivateChat } from './types/privatechat.model'

@Injectable()
export default class PrivateChatService {
  constructor(private prismaService: PrismaService) { }

  getById(id: string): Prisma.Prisma__PrivateChatClient<PrivateChat> {
    return this.prismaService.privateChat.findUnique({
      where: { id },
    })
  }

  async createPrivateChat(sender: User, receiver: User) {
    return this.prismaService.privateChat.create({
      data: {
        users: { connect: [{ id: sender.id }, { id: receiver.id }] },
      }
    })
  }

  async sendMessage(privatChatId: string, sender: User, message: string) {
    return this.prismaService.chatMessage.create({
      data: {
        privateChatId,
        senderId: sender.id,
        message,
      }
    })
  }

  async getMessages(privateChatId: string) {
    return this.prismaService.privateChat.findMany({
      where: { privateChatId },
    })
  }
}
