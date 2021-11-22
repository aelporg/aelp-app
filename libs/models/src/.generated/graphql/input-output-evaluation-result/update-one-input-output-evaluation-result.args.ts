import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InputOutputEvaluationResultUpdateInput } from './input-output-evaluation-result-update.input';
import { InputOutputEvaluationResultWhereUniqueInput } from './input-output-evaluation-result-where-unique.input';

@ArgsType()
export class UpdateOneInputOutputEvaluationResultArgs {

    @Field(() => InputOutputEvaluationResultUpdateInput, {nullable:false})
    data!: InputOutputEvaluationResultUpdateInput;

    @Field(() => InputOutputEvaluationResultWhereUniqueInput, {nullable:false})
    where!: InputOutputEvaluationResultWhereUniqueInput;
}
