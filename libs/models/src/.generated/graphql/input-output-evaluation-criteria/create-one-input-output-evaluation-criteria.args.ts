import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InputOutputEvaluationCriteriaCreateInput } from './input-output-evaluation-criteria-create.input';

@ArgsType()
export class CreateOneInputOutputEvaluationCriteriaArgs {

    @Field(() => InputOutputEvaluationCriteriaCreateInput, {nullable:false})
    data!: InputOutputEvaluationCriteriaCreateInput;
}
