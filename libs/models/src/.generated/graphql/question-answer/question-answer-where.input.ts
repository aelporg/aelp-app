import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { QuestionRelationFilter } from '../question/question-relation-filter.input';
import { MultipleChoiceQuestionAnswerRelationFilter } from '../multiple-choice-question-answer/multiple-choice-question-answer-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { ProgrammingQuestionAnswerRelationFilter } from '../programming-question-answer/programming-question-answer-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { AssessmentAnswerRelationFilter } from '../assessment-answer/assessment-answer-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class QuestionAnswerWhereInput {

    @Field(() => [QuestionAnswerWhereInput], {nullable:true})
    AND?: Array<QuestionAnswerWhereInput>;

    @Field(() => [QuestionAnswerWhereInput], {nullable:true})
    OR?: Array<QuestionAnswerWhereInput>;

    @Field(() => [QuestionAnswerWhereInput], {nullable:true})
    NOT?: Array<QuestionAnswerWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => QuestionRelationFilter, {nullable:true})
    question?: QuestionRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    questionId?: StringFilter;

    @Field(() => MultipleChoiceQuestionAnswerRelationFilter, {nullable:true})
    multipleChoiceQuestionAnswer?: MultipleChoiceQuestionAnswerRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    multipleChoiceQuestionAnswerId?: StringNullableFilter;

    @Field(() => ProgrammingQuestionAnswerRelationFilter, {nullable:true})
    programmingQuestionAnswer?: ProgrammingQuestionAnswerRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    programmingQuestionAnswerId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => AssessmentAnswerRelationFilter, {nullable:true})
    assessmentSubmission?: AssessmentAnswerRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    assessmentSubmissionId?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    points?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;
}
