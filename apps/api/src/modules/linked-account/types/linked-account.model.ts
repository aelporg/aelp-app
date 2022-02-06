import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Provider } from '../../provider/types/provider.model'
import { User } from '../../user/types/user.model'

@ObjectType()
export class LinkedAccount {
  @Field(() => User, { nullable: false })
  user?: User

  @Field(() => String, { nullable: false })
  userId!: string

  @Field(() => Provider, { nullable: false })
  provider?: Provider

  @Field(() => String, { nullable: false })
  providerId!: string

  @Field(() => String, { nullable: false })
  externalId!: string

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => Date, { nullable: false })
  createdAt!: Date
}
