import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InputOutputEvaluationResultWhereUniqueInput } from './input-output-evaluation-result-where-unique.input';
import { InputOutputEvaluationResultCreateInput } from './input-output-evaluation-result-create.input';
import { InputOutputEvaluationResultUpdateInput } from './input-output-evaluation-result-update.input';

@ArgsType()
export class UpsertOneInputOutputEvaluationResultArgs {

    @Field(() => InputOutputEvaluationResultWhereUniqueInput, {nullable:false})
    where!: InputOutputEvaluationResultWhereUniqueInput;

    @Field(() => InputOutputEvaluationResultCreateInput, {nullable:false})
    create!: InputOutputEvaluationResultCreateInput;

    @Field(() => InputOutputEvaluationResultUpdateInput, {nullable:false})
    update!: InputOutputEvaluationResultUpdateInput;
}
