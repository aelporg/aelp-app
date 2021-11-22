import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClassroomRelationFilter } from '../classroom/classroom-relation-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { EnumClassroomRoleFilter } from '../prisma/enum-classroom-role-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ClassroomMemberWhereInput {

    @Field(() => [ClassroomMemberWhereInput], {nullable:true})
    AND?: Array<ClassroomMemberWhereInput>;

    @Field(() => [ClassroomMemberWhereInput], {nullable:true})
    OR?: Array<ClassroomMemberWhereInput>;

    @Field(() => [ClassroomMemberWhereInput], {nullable:true})
    NOT?: Array<ClassroomMemberWhereInput>;

    @Field(() => ClassroomRelationFilter, {nullable:true})
    classroom?: ClassroomRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    classroomId?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => EnumClassroomRoleFilter, {nullable:true})
    classroomRole?: EnumClassroomRoleFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
