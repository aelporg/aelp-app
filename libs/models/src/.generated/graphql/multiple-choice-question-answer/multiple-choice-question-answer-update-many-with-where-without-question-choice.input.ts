import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionAnswerScalarWhereInput } from './multiple-choice-question-answer-scalar-where.input';
import { MultipleChoiceQuestionAnswerUpdateManyMutationInput } from './multiple-choice-question-answer-update-many-mutation.input';

@InputType()
export class MultipleChoiceQuestionAnswerUpdateManyWithWhereWithoutQuestionChoiceInput {

    @Field(() => MultipleChoiceQuestionAnswerScalarWhereInput, {nullable:false})
    where!: MultipleChoiceQuestionAnswerScalarWhereInput;

    @Field(() => MultipleChoiceQuestionAnswerUpdateManyMutationInput, {nullable:false})
    data!: MultipleChoiceQuestionAnswerUpdateManyMutationInput;
}
