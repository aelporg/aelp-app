import { ModelsModule } from '@aelp-app/models'
import { Module } from '@nestjs/common'
import ClassroomAnnouncementResolver from './classroom-announcement.resolver'
import ClassroomAnnouncementsService from './classroom-announcement.service'
import ClassroomMemberResolver from './classroom-member.resolver'
import ClassroomResolver from './classroom.resolver'
import ClassroomService from './classroom.service'

@Module({
  imports: [ModelsModule],
  providers: [
    ClassroomResolver,
    ClassroomMemberResolver,
    ClassroomService,
    ClassroomAnnouncementsService,
    ClassroomAnnouncementResolver,
  ],
})
export default class ClassroomModule {}
