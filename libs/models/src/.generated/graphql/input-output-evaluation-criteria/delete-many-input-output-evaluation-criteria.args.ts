import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InputOutputEvaluationCriteriaWhereInput } from './input-output-evaluation-criteria-where.input';

@ArgsType()
export class DeleteManyInputOutputEvaluationCriteriaArgs {

    @Field(() => InputOutputEvaluationCriteriaWhereInput, {nullable:true})
    where?: InputOutputEvaluationCriteriaWhereInput;
}
