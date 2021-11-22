import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumEvaluationCriteriaTypeWithAggregatesFilter } from '../prisma/enum-evaluation-criteria-type-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class EvaluationCriteriaScalarWhereWithAggregatesInput {

    @Field(() => [EvaluationCriteriaScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<EvaluationCriteriaScalarWhereWithAggregatesInput>;

    @Field(() => [EvaluationCriteriaScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<EvaluationCriteriaScalarWhereWithAggregatesInput>;

    @Field(() => [EvaluationCriteriaScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<EvaluationCriteriaScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => EnumEvaluationCriteriaTypeWithAggregatesFilter, {nullable:true})
    type?: EnumEvaluationCriteriaTypeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    totalPoints?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    inputOutputEvalCritId?: StringNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    requiredToPass?: BoolWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    programmingQuestionId?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    hidden?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
