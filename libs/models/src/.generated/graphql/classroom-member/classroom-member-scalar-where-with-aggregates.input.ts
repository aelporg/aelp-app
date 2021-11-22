import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumClassroomRoleWithAggregatesFilter } from '../prisma/enum-classroom-role-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ClassroomMemberScalarWhereWithAggregatesInput {

    @Field(() => [ClassroomMemberScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ClassroomMemberScalarWhereWithAggregatesInput>;

    @Field(() => [ClassroomMemberScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ClassroomMemberScalarWhereWithAggregatesInput>;

    @Field(() => [ClassroomMemberScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ClassroomMemberScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    classroomId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => EnumClassroomRoleWithAggregatesFilter, {nullable:true})
    classroomRole?: EnumClassroomRoleWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
