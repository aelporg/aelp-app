import { PrismaService } from '@aelp-app/models'
import { Injectable } from '@nestjs/common'
import { CreateAnnouncementInput } from './types/create-announcement-input-type'

@Injectable()
export default class AnnouncementService {
  constructor(private prismaService: PrismaService) { }

  async createAnnoucement(
    classroomId: string,
    input: CreateAnnouncementInput
  ) {
    return this.prismaService.announcement.create({
      data: {
        ...input,
        classroom: { connect: { id: classroomId } },
      }
    })
  }

  async updateAnnouncement(
    announcementId: String,
    input: CreateAnnouncementInput
  ) {
    return this.prismaService.announcement.updateAnnouncement({
      where: { id: announcementId },
      data: { input }
    })
  }

  async deleteAnnoucement(announcementId: String) {
    return this.prismaService.announcement.deleteAnnoucement({
      where: { id: announcementId }
    })
  }

  async getAnnoucements(classroomId: string) {
    return this.prismaService.classroom.findUnique({
      where: { id: classroomId },
    }).annoucements()
  }

  async getAnnoucementAttachments(announcementId: String) {
    return this.prismaService.annoucements.findUnique({
      where: { id: announcementId }
    }).attachments()
  }
}
