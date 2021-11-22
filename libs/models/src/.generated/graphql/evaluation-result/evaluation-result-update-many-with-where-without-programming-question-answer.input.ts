import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationResultScalarWhereInput } from './evaluation-result-scalar-where.input';
import { EvaluationResultUpdateManyMutationInput } from './evaluation-result-update-many-mutation.input';

@InputType()
export class EvaluationResultUpdateManyWithWhereWithoutProgrammingQuestionAnswerInput {

    @Field(() => EvaluationResultScalarWhereInput, {nullable:false})
    where!: EvaluationResultScalarWhereInput;

    @Field(() => EvaluationResultUpdateManyMutationInput, {nullable:false})
    data!: EvaluationResultUpdateManyMutationInput;
}
