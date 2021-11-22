import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InputOutputEvaluationResultWhereUniqueInput } from './input-output-evaluation-result-where-unique.input';

@ArgsType()
export class FindUniqueInputOutputEvaluationResultArgs {

    @Field(() => InputOutputEvaluationResultWhereUniqueInput, {nullable:false})
    where!: InputOutputEvaluationResultWhereUniqueInput;
}
