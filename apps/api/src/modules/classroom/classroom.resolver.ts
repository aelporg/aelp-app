import { Classroom, PrismaService, User } from '@aelp-app/models'
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
import { CreateClassroomInput } from './create-classroom-input-type'

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
    @Args('inviteCode') inviteCode: string
  ) {
    return this.classroomService.joinClassroom(inviteCode, user)
  }

  @ResolveField()
  async members(@Parent() classroom: Classroom) {
    return this.prismaService.classroom
      .findUnique({
        where: { id: classroom.id },
      })
      .members()
  }
}
