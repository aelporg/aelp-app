import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ClassroomMemberListRelationFilter } from '../classroom-member/classroom-member-list-relation-filter.input';
import { AssessmentListRelationFilter } from '../assessment/assessment-list-relation-filter.input';
import { PracticeProgrammingQuestionListRelationFilter } from '../practice-programming-question/practice-programming-question-list-relation-filter.input';

@InputType()
export class ClassroomWhereInput {

    @Field(() => [ClassroomWhereInput], {nullable:true})
    AND?: Array<ClassroomWhereInput>;

    @Field(() => [ClassroomWhereInput], {nullable:true})
    OR?: Array<ClassroomWhereInput>;

    @Field(() => [ClassroomWhereInput], {nullable:true})
    NOT?: Array<ClassroomWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    subject?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    section?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    inviteCode?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => ClassroomMemberListRelationFilter, {nullable:true})
    members?: ClassroomMemberListRelationFilter;

    @Field(() => AssessmentListRelationFilter, {nullable:true})
    assessments?: AssessmentListRelationFilter;

    @Field(() => PracticeProgrammingQuestionListRelationFilter, {nullable:true})
    practiceProgrammingQuestions?: PracticeProgrammingQuestionListRelationFilter;
}
