import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InputOutputEvaluationCriteriaWhereUniqueInput } from './input-output-evaluation-criteria-where-unique.input';

@ArgsType()
export class DeleteOneInputOutputEvaluationCriteriaArgs {

    @Field(() => InputOutputEvaluationCriteriaWhereUniqueInput, {nullable:false})
    where!: InputOutputEvaluationCriteriaWhereUniqueInput;
}
