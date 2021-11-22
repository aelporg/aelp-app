import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentAnswerScalarWhereInput } from './assessment-answer-scalar-where.input';
import { AssessmentAnswerUpdateManyMutationInput } from './assessment-answer-update-many-mutation.input';

@InputType()
export class AssessmentAnswerUpdateManyWithWhereWithoutAssessmentInput {

    @Field(() => AssessmentAnswerScalarWhereInput, {nullable:false})
    where!: AssessmentAnswerScalarWhereInput;

    @Field(() => AssessmentAnswerUpdateManyMutationInput, {nullable:false})
    data!: AssessmentAnswerUpdateManyMutationInput;
}
