import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { ClassroomAnnouncement } from './classroom-announcement.model'

@ObjectType()
export class AnnoucmentAttachment {
  @Field(() => ID, { nullable: false })
  id!: string

  @Field(() => String, { nullable: false })
  fileName!: string

  @Field(() => String, { nullable: false })
  file!: Buffer

  @Field(() => ClassroomAnnouncement, { nullable: false })
  classroomAnnouncement?: ClassroomAnnouncement

  @Field(() => String, { nullable: false })
  classroomAnnouncementId!: string
}
