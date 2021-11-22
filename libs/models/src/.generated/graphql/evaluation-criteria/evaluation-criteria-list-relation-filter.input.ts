import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationCriteriaWhereInput } from './evaluation-criteria-where.input';

@InputType()
export class EvaluationCriteriaListRelationFilter {

    @Field(() => EvaluationCriteriaWhereInput, {nullable:true})
    every?: EvaluationCriteriaWhereInput;

    @Field(() => EvaluationCriteriaWhereInput, {nullable:true})
    some?: EvaluationCriteriaWhereInput;

    @Field(() => EvaluationCriteriaWhereInput, {nullable:true})
    none?: EvaluationCriteriaWhereInput;
}
