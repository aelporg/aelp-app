import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ClassroomRole } from './classroom-role.enum'
import { NestedEnumClassroomRoleFilter } from './nested-enum-classroom-role-filter.input'

@InputType()
export class EnumClassroomRoleFilter {
  @Field(() => ClassroomRole, { nullable: true })
  equals?: keyof typeof ClassroomRole;

  @Field(() => [ClassroomRole], { nullable: true })
  in?: Array<keyof typeof ClassroomRole>

  @Field(() => [ClassroomRole], { nullable: true })
  notIn?: Array<keyof typeof ClassroomRole>

  @Field(() => NestedEnumClassroomRoleFilter, { nullable: true })
  not?: NestedEnumClassroomRoleFilter
}
