import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationCriteriaWhereInput } from './evaluation-criteria-where.input';

@InputType()
export class EvaluationCriteriaRelationFilter {

    @Field(() => EvaluationCriteriaWhereInput, {nullable:true})
    is?: EvaluationCriteriaWhereInput;

    @Field(() => EvaluationCriteriaWhereInput, {nullable:true})
    isNot?: EvaluationCriteriaWhereInput;
}
