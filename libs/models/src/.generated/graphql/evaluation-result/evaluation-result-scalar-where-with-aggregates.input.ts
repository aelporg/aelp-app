import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class EvaluationResultScalarWhereWithAggregatesInput {

    @Field(() => [EvaluationResultScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<EvaluationResultScalarWhereWithAggregatesInput>;

    @Field(() => [EvaluationResultScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<EvaluationResultScalarWhereWithAggregatesInput>;

    @Field(() => [EvaluationResultScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<EvaluationResultScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    evaluationCriteriaId?: StringWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    evaulationPoints?: FloatWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    inputOutputEvaluationResultId?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    programmingQuestionAnswerId?: StringWithAggregatesFilter;
}
