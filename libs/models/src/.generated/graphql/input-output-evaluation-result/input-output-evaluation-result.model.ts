import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { EvaluationResult } from '../evaluation-result/evaluation-result.model';

@ObjectType()
export class InputOutputEvaluationResult {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => [String], {nullable:true})
    resultOutputs!: Array<string>;

    @Field(() => EvaluationResult, {nullable:true})
    baseEvaluationResult?: EvaluationResult | null;
}
