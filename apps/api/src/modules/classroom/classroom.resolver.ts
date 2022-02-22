import { UseGuards } from '@nestjs/common'
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql'
import { LoggedInUser } from '../../utils/decorators/LoggedInUser'
import { JwtAuthGuard } from '../auth/guards/JwtAuthGuard'
import ClassroomService from './classroom.service'
import { CreateClassroomInput } from './types/create-classroom-input-type'
import { JoinClassroomInput } from './join-classroom-input-type'
import { PrismaService } from '@aelp-app/models'
import { Classroom } from './types/classroom.model'
import { User } from '../user/types/user.model'
import { ClassroomAnnouncement } from './types/classroom-announcement.model'
import { ClassroomMember } from './types/classroom-member.model'

@Resolver(() => Classroom)
export default class ClassroomResolver {
  constructor(
    private prismaService: PrismaService,
    private classroomService: ClassroomService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => [Classroom])
  async classrooms(@LoggedInUser() user: User) {
    return this.classroomService.getUserClassrooms(user)
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => Classroom, { nullable: true })
  async classroom(@Args('id') id: string, @LoggedInUser() user: User) {
    const classroom = await this.classroomService.getClassroomById(id)

    if (!classroom) {
      return null
    }

    const members = await this.members(classroom)

    if (!members.find(member => member.userId === user.id)) {
      return null
    }

    return classroom
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Classroom)
  async createClassroom(
    @LoggedInUser() user: User,
    @Args('data') data: CreateClassroomInput
  ) {
    return this.classroomService.createClassroom(data, user)
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Classroom)
  async joinClassroom(
    @LoggedInUser() user: User,
    @Args('data') data: JoinClassroomInput
  ) {
    return this.classroomService.joinClassroom(data.inviteCode, user)
  }

  @ResolveField(() => [ClassroomMember])
  async members(@Parent() classroom: Classroom) {
    return this.prismaService.classroom
      .findUnique({
        where: { id: classroom.id },
      })
      .members()
  }

  @ResolveField(() => [ClassroomAnnouncement])
  async annoucements(@Parent() classroom: Classroom) {
    return this.classroomService.getAnnoucements(classroom.id)
  }

  @ResolveField(() => String)
  async inviteCode(@Parent() classroom: Classroom, @LoggedInUser() user: User) {
    return this.classroomService.getClassroomInviteCode(classroom.id, user)
  }
}
