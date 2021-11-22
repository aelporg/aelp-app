import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class MultipleChoiceQuestionChoiceScalarWhereWithAggregatesInput {

    @Field(() => [MultipleChoiceQuestionChoiceScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MultipleChoiceQuestionChoiceScalarWhereWithAggregatesInput>;

    @Field(() => [MultipleChoiceQuestionChoiceScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MultipleChoiceQuestionChoiceScalarWhereWithAggregatesInput>;

    @Field(() => [MultipleChoiceQuestionChoiceScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MultipleChoiceQuestionChoiceScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    choice?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    questionId?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    correct?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
