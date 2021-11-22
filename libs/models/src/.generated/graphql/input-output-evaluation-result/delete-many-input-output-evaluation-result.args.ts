import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InputOutputEvaluationResultWhereInput } from './input-output-evaluation-result-where.input';

@ArgsType()
export class DeleteManyInputOutputEvaluationResultArgs {

    @Field(() => InputOutputEvaluationResultWhereInput, {nullable:true})
    where?: InputOutputEvaluationResultWhereInput;
}
