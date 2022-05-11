import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { UserCount } from './user-count.output'
import { Country } from '../../country/types/country.model'
import { Role } from '../../../global-types/role.enum'

@ObjectType()
export class User {
  @Field(() => ID, { nullable: false })
  id!: string

  @Field(() => String, { nullable: true })
  firstName!: string | null

  @Field(() => String, { nullable: true })
  lastName!: string | null

  @Field(() => String, { nullable: false })
  userName!: string

  @Field(() => String, { nullable: false })
  email!: string

  @Field(() => Country, { nullable: false })
  country?: Country

  @Field(() => String, { nullable: false })
  countryId!: string

  @Field(() => Role, { nullable: false, defaultValue: 'USER' })
  role!: keyof typeof Role

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => UserCount, { nullable: false })
  _count?: UserCount
}
