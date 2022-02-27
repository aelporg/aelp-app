import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { User } from '../../user/types/user.model'
import { AnnoucmentAttachment } from './annoucment-attachment.model'
import { ClassroomAnnouncementsCount } from './classroom-announcement-count.output'
import { Classroom } from './classroom.model'

@ObjectType()
export class ClassroomAnnouncement {
  @Field(() => ID, { nullable: false })
  id!: string

  @Field(() => Classroom, { nullable: false })
  classroom!: Classroom

  @Field(() => User, { nullable: false })
  user!: User

  @Field(() => String, { nullable: false })
  classroomId!: string

  @Field(() => String, { nullable: false })
  userId!: string

  @Field(() => String, { nullable: false })
  content!: string

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => [AnnoucmentAttachment], { nullable: true })
  attachments?: Array<AnnoucmentAttachment>

  @Field(() => ClassroomAnnouncementsCount, { nullable: false })
  _count?: ClassroomAnnouncementsCount
}
