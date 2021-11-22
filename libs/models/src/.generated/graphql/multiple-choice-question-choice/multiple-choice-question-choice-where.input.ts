import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { MultipleChoiceQuestionRelationFilter } from '../multiple-choice-question/multiple-choice-question-relation-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { MultipleChoiceQuestionAnswerListRelationFilter } from '../multiple-choice-question-answer/multiple-choice-question-answer-list-relation-filter.input';

@InputType()
export class MultipleChoiceQuestionChoiceWhereInput {

    @Field(() => [MultipleChoiceQuestionChoiceWhereInput], {nullable:true})
    AND?: Array<MultipleChoiceQuestionChoiceWhereInput>;

    @Field(() => [MultipleChoiceQuestionChoiceWhereInput], {nullable:true})
    OR?: Array<MultipleChoiceQuestionChoiceWhereInput>;

    @Field(() => [MultipleChoiceQuestionChoiceWhereInput], {nullable:true})
    NOT?: Array<MultipleChoiceQuestionChoiceWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    choice?: StringFilter;

    @Field(() => MultipleChoiceQuestionRelationFilter, {nullable:true})
    question?: MultipleChoiceQuestionRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    questionId?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    correct?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => MultipleChoiceQuestionAnswerListRelationFilter, {nullable:true})
    answers?: MultipleChoiceQuestionAnswerListRelationFilter;
}
