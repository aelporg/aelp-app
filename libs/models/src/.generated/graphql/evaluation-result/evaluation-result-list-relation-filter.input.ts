import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationResultWhereInput } from './evaluation-result-where.input';

@InputType()
export class EvaluationResultListRelationFilter {

    @Field(() => EvaluationResultWhereInput, {nullable:true})
    every?: EvaluationResultWhereInput;

    @Field(() => EvaluationResultWhereInput, {nullable:true})
    some?: EvaluationResultWhereInput;

    @Field(() => EvaluationResultWhereInput, {nullable:true})
    none?: EvaluationResultWhereInput;
}
