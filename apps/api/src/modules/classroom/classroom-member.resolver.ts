import ClassroomService from './classroom.service'

import { Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { User } from '../user/types/user.model'
import { UserService } from '../user/user.service'
import { ClassroomMember } from './types/classroom-member.model'
import { Classroom } from './types/classroom.model'

@Resolver(() => ClassroomMember)
export default class ClassroomMemberResolver {
  constructor(
    private userService: UserService,
    private classroomService: ClassroomService
  ) {}

  @ResolveField(() => User)
  user(@Parent() member: ClassroomMember) {
    return this.userService.getUserById(member.userId)
  }

  @ResolveField(() => Classroom)
  classroom(@Parent() member: ClassroomMember) {
    return this.classroomService.getClassroomById(member.classroomId)
  }
}
