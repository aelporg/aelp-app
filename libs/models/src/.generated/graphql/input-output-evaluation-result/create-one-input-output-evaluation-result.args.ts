import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InputOutputEvaluationResultCreateInput } from './input-output-evaluation-result-create.input';

@ArgsType()
export class CreateOneInputOutputEvaluationResultArgs {

    @Field(() => InputOutputEvaluationResultCreateInput, {nullable:false})
    data!: InputOutputEvaluationResultCreateInput;
}
