import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EvaluationResultUpdateInput } from './evaluation-result-update.input';
import { EvaluationResultWhereUniqueInput } from './evaluation-result-where-unique.input';

@ArgsType()
export class UpdateOneEvaluationResultArgs {

    @Field(() => EvaluationResultUpdateInput, {nullable:false})
    data!: EvaluationResultUpdateInput;

    @Field(() => EvaluationResultWhereUniqueInput, {nullable:false})
    where!: EvaluationResultWhereUniqueInput;
}
