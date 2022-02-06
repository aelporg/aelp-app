import { UserRegisterInputValidator } from '@aelp-app/validators'
import { Field, InputType } from '@nestjs/graphql'
import { JoiSchemaExtends } from 'nestjs-joi'

interface IUserRegisterInput {
  email: string
  password: string
  confirmPassword: string
  agreeTerms: boolean
}

@InputType()
@JoiSchemaExtends(UserRegisterInputValidator)
export class UserRegisterInput implements IUserRegisterInput {
  @Field()
  password!: string

  @Field()
  confirmPassword!: string

  @Field()
  email!: string

  @Field()
  agreeTerms!: boolean
}

