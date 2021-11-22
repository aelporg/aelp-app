import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationCriteriaScalarWhereInput } from './evaluation-criteria-scalar-where.input';
import { EvaluationCriteriaUpdateManyMutationInput } from './evaluation-criteria-update-many-mutation.input';

@InputType()
export class EvaluationCriteriaUpdateManyWithWhereWithoutProgrammingQuestionInput {

    @Field(() => EvaluationCriteriaScalarWhereInput, {nullable:false})
    where!: EvaluationCriteriaScalarWhereInput;

    @Field(() => EvaluationCriteriaUpdateManyMutationInput, {nullable:false})
    data!: EvaluationCriteriaUpdateManyMutationInput;
}
