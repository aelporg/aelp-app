import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationResultWhereInput } from './evaluation-result-where.input';

@InputType()
export class EvaluationResultRelationFilter {

    @Field(() => EvaluationResultWhereInput, {nullable:true})
    is?: EvaluationResultWhereInput;

    @Field(() => EvaluationResultWhereInput, {nullable:true})
    isNot?: EvaluationResultWhereInput;
}
