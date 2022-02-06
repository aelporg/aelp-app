import { ClassroomRole, User } from '@aelp-app/models'
import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Classroom } from './classroom.model'

@ObjectType()
export class ClassroomMember {
  @Field(() => Classroom, { nullable: false })
  classroom?: Classroom

  @Field(() => String, { nullable: false })
  classroomId!: string

  @Field(() => User, { nullable: false })
  user?: User

  @Field(() => String, { nullable: false })
  userId!: string

  @Field(() => ClassroomRole, { nullable: false })
  classroomRole!: keyof typeof ClassroomRole

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => Date, { nullable: false })
  createdAt!: Date
}
