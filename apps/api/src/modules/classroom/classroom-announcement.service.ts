import { PrismaService } from '@aelp-app/models'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { ClassroomRole } from '../../global-types'
import { User } from '../user/types/user.model'
import { ClassroomAnnouncementUpdateInput } from './types/classroom-announcement-update.input'
import { ClassroomAnnoucementCreateInput } from './types/create-announcement-input-type'

@Injectable()
export default class ClassroomAnnouncementsService {
  constructor(private prismaService: PrismaService) {}

  async createAnnoucement(input: ClassroomAnnoucementCreateInput, user: User) {
    // Classroom Id will come on the input
    const { classroomId } = input

    // Get record of the user that is creating announcement
    const classroomMemberRecord =
      await this.prismaService.classroomMember.findUnique({
        where: { classroomId_userId: { classroomId, userId: user.id } },
      })

    // if no record exists for the user in the classroom or the user is a student of the class
    // Throw an unauthorized Exceptions
    if (
      !classroomMemberRecord ||
      classroomMemberRecord.classroomRole === ClassroomRole.STUDENT
    ) {
      throw new UnauthorizedException()
    }

    // Finally return the newly created classroom announcement
    return this.prismaService.classroomAnnouncement.create({
      data: {
        content: input.content,
        attachments: {},
        user: { connect: { id: user.id } },
        classroom: { connect: { id: classroomId } },
      },
    })
  }

  async updateAnnouncement(
    announcementId: string,
    input: ClassroomAnnouncementUpdateInput,
    user: User
  ) {
    const announcement =
      await this.prismaService.classroomAnnouncement.findUnique({
        where: { id: announcementId },
      })

    // If annoucement user is trying to update is not created by them, throw an Unauthorized Exception
    if (announcement.userId !== user.id)
      return new UnauthorizedException(
        'This announcement is not created by you.'
      )

    return this.prismaService.classroomAnnouncement.update({
      where: { id: announcementId },
      data: input,
    })
  }

  async deleteAnnoucement(announcementId: string, user: User) {
    const annoucement =
      await this.prismaService.classroomAnnouncement.findUnique({
        where: { id: announcementId },
      })

    const memberRecord = await this.prismaService.classroomMember.findUnique({
      where: {
        classroomId_userId: {
          classroomId: annoucement.classroomId,
          userId: user.id,
        },
      },
    })

    if (
      !memberRecord ||
      (memberRecord.classroomRole !== ClassroomRole.OWNER &&
        memberRecord.userId !== user.id)
    ) {
      throw new UnauthorizedException(
        'You are not authorized to delete annoucement'
      )
    }

    return this.prismaService.classroomAnnouncement.delete({
      where: { id: announcementId },
    })
  }

  // This function will not be exposed to the api,
  // so we can leave the authentication check
  async getAnnoucementAttachments(announcementId: string) {
    return this.prismaService.classroomAnnouncement
      .findUnique({
        where: { id: announcementId },
      })
      .attachments()
  }
}
