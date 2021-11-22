import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InputOutputEvaluationResultWhereInput } from './input-output-evaluation-result-where.input';

@InputType()
export class InputOutputEvaluationResultRelationFilter {

    @Field(() => InputOutputEvaluationResultWhereInput, {nullable:true})
    is?: InputOutputEvaluationResultWhereInput;

    @Field(() => InputOutputEvaluationResultWhereInput, {nullable:true})
    isNot?: InputOutputEvaluationResultWhereInput;
}
