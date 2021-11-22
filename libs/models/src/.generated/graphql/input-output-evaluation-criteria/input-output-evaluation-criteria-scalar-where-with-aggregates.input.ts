import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class InputOutputEvaluationCriteriaScalarWhereWithAggregatesInput {

    @Field(() => [InputOutputEvaluationCriteriaScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<InputOutputEvaluationCriteriaScalarWhereWithAggregatesInput>;

    @Field(() => [InputOutputEvaluationCriteriaScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<InputOutputEvaluationCriteriaScalarWhereWithAggregatesInput>;

    @Field(() => [InputOutputEvaluationCriteriaScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<InputOutputEvaluationCriteriaScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    inputs?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    outputs?: StringNullableListFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
