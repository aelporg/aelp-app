import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../../../global-types'

@InputType()
export class ClassroomAnnouncementUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  content?: StringFieldUpdateOperationsInput
}
