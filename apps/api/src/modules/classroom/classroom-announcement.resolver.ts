import { Args, Mutation, Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { LoggedInUser } from '../../utils/decorators/LoggedInUser'
import { User } from '../user/types/user.model'
import ClassroomAnnouncementsService from './classroom-announcement.service'
import { ClassroomAnnouncement } from './types/classroom-announcement.model'
import { ClassroomAnnoucementCreateInput } from './types/create-announcement-input-type'

@Resolver(() => ClassroomAnnouncement)
export default class ClassroomAnnouncementResolver {
  constructor(
    private classroomAnnouncementService: ClassroomAnnouncementsService
  ) {}

  @ResolveField()
  async attachments(@Parent() annoucement: ClassroomAnnouncement) {
    return this.classroomAnnouncementService.getAnnoucementAttachments(
      annoucement.id
    )
  }

  @Mutation(() => ClassroomAnnouncement)
  async createAnnouncement(
    @Args('data') data: ClassroomAnnoucementCreateInput,
    @LoggedInUser() user: User
  ) {
    return this.classroomAnnouncementService.createAnnoucement(data, user)
  }
}
