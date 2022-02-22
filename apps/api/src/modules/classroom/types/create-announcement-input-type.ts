import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class ClassroomAnnoucementCreateInput {
  @Field(() => String, { nullable: false })
  classroomId!: string

  @Field(() => String, { nullable: false })
  content!: string
}
