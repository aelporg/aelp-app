import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { EnvironmentPermissionLevel } from '../../../global-types'
import { User } from '../../user/types/user.model'
import { Environment } from './environment.model'
@ObjectType()
export class EnvironmentPermission {
  @Field(() => User, { nullable: false })
  user?: User

  @Field(() => String, { nullable: false })
  userId!: string

  @Field(() => Environment, { nullable: false })
  environment?: Environment

  @Field(() => String, { nullable: false })
  environmentId!: string

  @Field(() => EnvironmentPermissionLevel, { nullable: false })
  permission!: keyof typeof EnvironmentPermissionLevel

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => Date, { nullable: false })
  updatedAt!: Date
}
