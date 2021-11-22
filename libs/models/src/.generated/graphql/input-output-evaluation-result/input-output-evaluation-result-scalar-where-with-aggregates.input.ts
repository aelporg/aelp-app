import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';

@InputType()
export class InputOutputEvaluationResultScalarWhereWithAggregatesInput {

    @Field(() => [InputOutputEvaluationResultScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<InputOutputEvaluationResultScalarWhereWithAggregatesInput>;

    @Field(() => [InputOutputEvaluationResultScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<InputOutputEvaluationResultScalarWhereWithAggregatesInput>;

    @Field(() => [InputOutputEvaluationResultScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<InputOutputEvaluationResultScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    resultOutputs?: StringNullableListFilter;
}
