import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { AnnoucmentAttachment } from './annoucment-attachment.model'
import { ClassroomAnnouncementsCount } from './classroom-announcement-count.output'
import { Classroom } from './classroom.model'

@ObjectType()
export class ClassroomAnnouncement {
  @Field(() => ID, { nullable: false })
  id!: string

  @Field(() => Classroom, { nullable: false })
  classroom?: Classroom

  @Field(() => String, { nullable: false })
  classroomId!: string

  @Field(() => String, { nullable: false })
  content!: string

  @Field(() => [AnnoucmentAttachment], { nullable: true })
  attachments?: Array<AnnoucmentAttachment>

  @Field(() => ClassroomAnnouncementsCount, { nullable: false })
  _count?: ClassroomAnnouncementsCount
}
