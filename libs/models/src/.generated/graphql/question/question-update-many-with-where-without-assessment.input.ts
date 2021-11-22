import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionScalarWhereInput } from './question-scalar-where.input';
import { QuestionUpdateManyMutationInput } from './question-update-many-mutation.input';

@InputType()
export class QuestionUpdateManyWithWhereWithoutAssessmentInput {

    @Field(() => QuestionScalarWhereInput, {nullable:false})
    where!: QuestionScalarWhereInput;

    @Field(() => QuestionUpdateManyMutationInput, {nullable:false})
    data!: QuestionUpdateManyMutationInput;
}
