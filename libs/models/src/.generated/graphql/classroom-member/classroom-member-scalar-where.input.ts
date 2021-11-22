import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumClassroomRoleFilter } from '../prisma/enum-classroom-role-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ClassroomMemberScalarWhereInput {

    @Field(() => [ClassroomMemberScalarWhereInput], {nullable:true})
    AND?: Array<ClassroomMemberScalarWhereInput>;

    @Field(() => [ClassroomMemberScalarWhereInput], {nullable:true})
    OR?: Array<ClassroomMemberScalarWhereInput>;

    @Field(() => [ClassroomMemberScalarWhereInput], {nullable:true})
    NOT?: Array<ClassroomMemberScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    classroomId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => EnumClassroomRoleFilter, {nullable:true})
    classroomRole?: EnumClassroomRoleFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
