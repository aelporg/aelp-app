import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EvaluationResultCreateInput } from './evaluation-result-create.input';

@ArgsType()
export class CreateOneEvaluationResultArgs {

    @Field(() => EvaluationResultCreateInput, {nullable:false})
    data!: EvaluationResultCreateInput;
}
