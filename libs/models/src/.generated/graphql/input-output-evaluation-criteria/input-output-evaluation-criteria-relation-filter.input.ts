import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InputOutputEvaluationCriteriaWhereInput } from './input-output-evaluation-criteria-where.input';

@InputType()
export class InputOutputEvaluationCriteriaRelationFilter {

    @Field(() => InputOutputEvaluationCriteriaWhereInput, {nullable:true})
    is?: InputOutputEvaluationCriteriaWhereInput;

    @Field(() => InputOutputEvaluationCriteriaWhereInput, {nullable:true})
    isNot?: InputOutputEvaluationCriteriaWhereInput;
}
