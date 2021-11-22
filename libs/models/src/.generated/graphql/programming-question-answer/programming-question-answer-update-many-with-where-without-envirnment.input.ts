import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionAnswerScalarWhereInput } from './programming-question-answer-scalar-where.input';
import { ProgrammingQuestionAnswerUpdateManyMutationInput } from './programming-question-answer-update-many-mutation.input';

@InputType()
export class ProgrammingQuestionAnswerUpdateManyWithWhereWithoutEnvirnmentInput {

    @Field(() => ProgrammingQuestionAnswerScalarWhereInput, {nullable:false})
    where!: ProgrammingQuestionAnswerScalarWhereInput;

    @Field(() => ProgrammingQuestionAnswerUpdateManyMutationInput, {nullable:false})
    data!: ProgrammingQuestionAnswerUpdateManyMutationInput;
}
