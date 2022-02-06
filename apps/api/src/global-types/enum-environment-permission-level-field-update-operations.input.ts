import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { EnvironmentPermissionLevel } from './environment-permission-level.enum'

@InputType()
export class EnumEnvironmentPermissionLevelFieldUpdateOperationsInput {
  @Field(() => EnvironmentPermissionLevel, { nullable: true })
  set?: keyof typeof EnvironmentPermissionLevel
}
