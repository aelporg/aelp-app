import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionAnswerScalarWhereInput } from './question-answer-scalar-where.input';
import { QuestionAnswerUpdateManyMutationInput } from './question-answer-update-many-mutation.input';

@InputType()
export class QuestionAnswerUpdateManyWithWhereWithoutQuestionInput {

    @Field(() => QuestionAnswerScalarWhereInput, {nullable:false})
    where!: QuestionAnswerScalarWhereInput;

    @Field(() => QuestionAnswerUpdateManyMutationInput, {nullable:false})
    data!: QuestionAnswerUpdateManyMutationInput;
}
