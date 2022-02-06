import { InputType, Field } from '@nestjs/graphql'
import { CreateClassroomInputValidator } from '@aelp-app/validators'

export interface ICreateClassroomInput {
  name: string
  subject?: string
  section?: string
}

@InputType()
export class CreateClassroomInput
  extends CreateClassroomInputValidator
  implements ICreateClassroomInput
{
  @Field()
  name!: string

  @Field({ nullable: true })
  subject?: string

  @Field({ nullable: true })
  section?: string
}
