import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EvaluationResultWhereInput } from './evaluation-result-where.input';

@ArgsType()
export class DeleteManyEvaluationResultArgs {

    @Field(() => EvaluationResultWhereInput, {nullable:true})
    where?: EvaluationResultWhereInput;
}
