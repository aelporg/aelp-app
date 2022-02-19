import { ModelsModule } from '@aelp-app/models'
import { Module } from '@nestjs/common'
import ClassroomMemberResolver from './classroom-member.resolver'
import ClassroomResolver from './classroom.resolver'
import ClassroomService from './classroom.service'

@Module({
  imports: [ModelsModule],
  providers: [ClassroomResolver, ClassroomMemberResolver, ClassroomService],
})
export default class ClassroomModule {}
