import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CreateAnnouncementInput {
  @Field()
  content!: string

  @Field({ nullable: true })
  attachments!: string[]
}
