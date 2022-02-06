import { PrismaService } from '@aelp-app/models'
import { Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { User } from '../user/types/user.model'
import ClassroomService from './classroom.service'
import { ClassroomMember } from './types/classroom-member.model'
import { Classroom } from './types/classroom.model'

@Resolver(() => ClassroomMember)
export default class ClassroomMemberResolver {
  constructor(
    private prismaService: PrismaService,
    private classroomService: ClassroomService
  ) {}

  @ResolveField(() => User)
  user(@Parent() member: ClassroomMember) {
    return this.prismaService.user.findUnique({
      where: { id: member.userId },
    })
  }

  @ResolveField(() => Classroom)
  classroom(@Parent() member: ClassroomMember) {
    return this.prismaService.classroom.findUnique({
      where: { id: member.classroomId },
    })
  }
}
