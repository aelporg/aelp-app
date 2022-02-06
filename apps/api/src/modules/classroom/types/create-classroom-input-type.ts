import { InputType, Field } from '@nestjs/graphql'
import { CreateClassroomInputValidator } from '@aelp-app/validators'

@InputType()
export class CreateClassroomInput extends CreateClassroomInputValidator {
  @Field()
  name!: string

  @Field({ nullable: true })
  subject?: string

  @Field({ nullable: true })
  section?: string
}
