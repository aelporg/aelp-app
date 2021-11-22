import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EvaluationResultWhereUniqueInput } from './evaluation-result-where-unique.input';

@ArgsType()
export class DeleteOneEvaluationResultArgs {

    @Field(() => EvaluationResultWhereUniqueInput, {nullable:false})
    where!: EvaluationResultWhereUniqueInput;
}
