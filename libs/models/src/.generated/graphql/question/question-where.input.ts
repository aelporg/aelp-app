import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumQuestionTypeFilter } from '../prisma/enum-question-type-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { MultipleChoiceQuestionRelationFilter } from '../multiple-choice-question/multiple-choice-question-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { ProgrammingQuestionRelationFilter } from '../programming-question/programming-question-relation-filter.input';
import { AssessmentRelationFilter } from '../assessment/assessment-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { QuestionAnswerListRelationFilter } from '../question-answer/question-answer-list-relation-filter.input';

@InputType()
export class QuestionWhereInput {

    @Field(() => [QuestionWhereInput], {nullable:true})
    AND?: Array<QuestionWhereInput>;

    @Field(() => [QuestionWhereInput], {nullable:true})
    OR?: Array<QuestionWhereInput>;

    @Field(() => [QuestionWhereInput], {nullable:true})
    NOT?: Array<QuestionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumQuestionTypeFilter, {nullable:true})
    questionType?: EnumQuestionTypeFilter;

    @Field(() => IntFilter, {nullable:true})
    points?: IntFilter;

    @Field(() => MultipleChoiceQuestionRelationFilter, {nullable:true})
    multipleChoiceQuestion?: MultipleChoiceQuestionRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    multipleChoiceQuestionId?: StringNullableFilter;

    @Field(() => ProgrammingQuestionRelationFilter, {nullable:true})
    programmingQuestion?: ProgrammingQuestionRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    programmingQuestionId?: StringNullableFilter;

    @Field(() => AssessmentRelationFilter, {nullable:true})
    assessment?: AssessmentRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    assessmentId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => QuestionAnswerListRelationFilter, {nullable:true})
    answers?: QuestionAnswerListRelationFilter;
}
