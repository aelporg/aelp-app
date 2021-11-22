import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EvaluationResultWhereUniqueInput } from './evaluation-result-where-unique.input';
import { EvaluationResultCreateInput } from './evaluation-result-create.input';
import { EvaluationResultUpdateInput } from './evaluation-result-update.input';

@ArgsType()
export class UpsertOneEvaluationResultArgs {

    @Field(() => EvaluationResultWhereUniqueInput, {nullable:false})
    where!: EvaluationResultWhereUniqueInput;

    @Field(() => EvaluationResultCreateInput, {nullable:false})
    create!: EvaluationResultCreateInput;

    @Field(() => EvaluationResultUpdateInput, {nullable:false})
    update!: EvaluationResultUpdateInput;
}
