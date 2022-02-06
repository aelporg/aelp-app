import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ClassroomRole } from './classroom-role.enum'
import { NestedIntFilter } from './nested-int-filter.input'
import { NestedEnumClassroomRoleFilter } from './nested-enum-classroom-role-filter.input'

@InputType()
export class NestedEnumClassroomRoleWithAggregatesFilter {
  @Field(() => ClassroomRole, { nullable: true })
  equals?: keyof typeof ClassroomRole;

  @Field(() => [ClassroomRole], { nullable: true })
  in?: Array<keyof typeof ClassroomRole>

  @Field(() => [ClassroomRole], { nullable: true })
  notIn?: Array<keyof typeof ClassroomRole>

  @Field(() => NestedEnumClassroomRoleWithAggregatesFilter, { nullable: true })
  not?: NestedEnumClassroomRoleWithAggregatesFilter

  @Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter

  @Field(() => NestedEnumClassroomRoleFilter, { nullable: true })
  _min?: NestedEnumClassroomRoleFilter

  @Field(() => NestedEnumClassroomRoleFilter, { nullable: true })
  _max?: NestedEnumClassroomRoleFilter
}
