import { InputType, Field } from '@nestjs/graphql'
import { JoinClassroomValidator } from '@aelp-app/validators'

@InputType()
export class JoinClassroomInput extends JoinClassroomValidator {
  @Field()
  inviteCode?: string
}
