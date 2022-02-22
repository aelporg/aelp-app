import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { LoggedInUser } from '../../utils/decorators/LoggedInUser'
import { JwtAuthGuard } from '../auth/guards/JwtAuthGuard'
import { User } from '../user/types/user.model'
import { UserService } from '../user/user.service'
import ClassroomAnnouncementsService from './classroom-announcement.service'
import ClassroomService from './classroom.service'
import { ClassroomAnnouncement } from './types/classroom-announcement.model'
import { Classroom } from './types/classroom.model'
import { ClassroomAnnoucementCreateInput } from './types/create-announcement-input-type'

@Resolver(() => ClassroomAnnouncement)
export default class ClassroomAnnouncementResolver {
  constructor(
    private classroomAnnouncementService: ClassroomAnnouncementsService,
    private classroomService: ClassroomService,
    private userService: UserService
  ) {}

  @ResolveField()
  async attachments(@Parent() annoucement: ClassroomAnnouncement) {
    return this.classroomAnnouncementService.getAnnoucementAttachments(
      annoucement.id
    )
  }

  @ResolveField(() => Classroom)
  async classroom(@Parent() annoucement: ClassroomAnnouncement) {
    return this.classroomService.getClassroomById(annoucement.classroomId)
  }

  @ResolveField(() => User)
  async user(@Parent() annoucement: ClassroomAnnouncement) {
    return this.userService.getUserById(annoucement.userId)
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => ClassroomAnnouncement)
  async createAnnouncement(
    @Args('data') data: ClassroomAnnoucementCreateInput,
    @LoggedInUser() user: User
  ) {
    return this.classroomAnnouncementService.createAnnoucement(data, user)
  }
}
