import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionChoiceScalarWhereInput } from './multiple-choice-question-choice-scalar-where.input';
import { MultipleChoiceQuestionChoiceUpdateManyMutationInput } from './multiple-choice-question-choice-update-many-mutation.input';

@InputType()
export class MultipleChoiceQuestionChoiceUpdateManyWithWhereWithoutQuestionInput {

    @Field(() => MultipleChoiceQuestionChoiceScalarWhereInput, {nullable:false})
    where!: MultipleChoiceQuestionChoiceScalarWhereInput;

    @Field(() => MultipleChoiceQuestionChoiceUpdateManyMutationInput, {nullable:false})
    data!: MultipleChoiceQuestionChoiceUpdateManyMutationInput;
}
