import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { LinkedAccount } from '../../linked-account/types/linked-account.model'
import { ProviderCount } from './provider-count.output'

@ObjectType()
export class Provider {
  @Field(() => ID, { nullable: false })
  id!: string

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => [LinkedAccount], { nullable: true })
  linkedAccounts?: Array<LinkedAccount>

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => ProviderCount, { nullable: false })
  _count?: ProviderCount
}
