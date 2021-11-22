import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { AssessmentRelationFilter } from '../assessment/assessment-relation-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { QuestionAnswerListRelationFilter } from '../question-answer/question-answer-list-relation-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class AssessmentAnswerWhereInput {

    @Field(() => [AssessmentAnswerWhereInput], {nullable:true})
    AND?: Array<AssessmentAnswerWhereInput>;

    @Field(() => [AssessmentAnswerWhereInput], {nullable:true})
    OR?: Array<AssessmentAnswerWhereInput>;

    @Field(() => [AssessmentAnswerWhereInput], {nullable:true})
    NOT?: Array<AssessmentAnswerWhereInput>;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => AssessmentRelationFilter, {nullable:true})
    assessment?: AssessmentRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    assessmentId?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    reviewed?: BoolFilter;

    @Field(() => QuestionAnswerListRelationFilter, {nullable:true})
    questionsSubmissions?: QuestionAnswerListRelationFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    submittedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    recPoints?: IntFilter;
}
