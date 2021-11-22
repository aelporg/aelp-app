import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EvaluationCriteriaWhereInput } from './evaluation-criteria-where.input';

@ArgsType()
export class DeleteManyEvaluationCriteriaArgs {

    @Field(() => EvaluationCriteriaWhereInput, {nullable:true})
    where?: EvaluationCriteriaWhereInput;
}
