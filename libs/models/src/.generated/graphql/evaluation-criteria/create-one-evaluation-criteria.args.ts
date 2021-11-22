import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EvaluationCriteriaCreateInput } from './evaluation-criteria-create.input';

@ArgsType()
export class CreateOneEvaluationCriteriaArgs {

    @Field(() => EvaluationCriteriaCreateInput, {nullable:false})
    data!: EvaluationCriteriaCreateInput;
}
