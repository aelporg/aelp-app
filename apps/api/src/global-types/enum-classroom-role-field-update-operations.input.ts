import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ClassroomRole } from './classroom-role.enum'

@InputType()
export class EnumClassroomRoleFieldUpdateOperationsInput {
  @Field(() => ClassroomRole, { nullable: true })
  set?: keyof typeof ClassroomRole
}
