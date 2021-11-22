import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { EvaluationCriteriaListRelationFilter } from '../evaluation-criteria/evaluation-criteria-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class InputOutputEvaluationCriteriaWhereInput {

    @Field(() => [InputOutputEvaluationCriteriaWhereInput], {nullable:true})
    AND?: Array<InputOutputEvaluationCriteriaWhereInput>;

    @Field(() => [InputOutputEvaluationCriteriaWhereInput], {nullable:true})
    OR?: Array<InputOutputEvaluationCriteriaWhereInput>;

    @Field(() => [InputOutputEvaluationCriteriaWhereInput], {nullable:true})
    NOT?: Array<InputOutputEvaluationCriteriaWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    inputs?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    outputs?: StringNullableListFilter;

    @Field(() => EvaluationCriteriaListRelationFilter, {nullable:true})
    baseCriteria?: EvaluationCriteriaListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
