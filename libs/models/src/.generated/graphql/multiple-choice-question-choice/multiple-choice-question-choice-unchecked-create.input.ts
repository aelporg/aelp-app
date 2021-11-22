import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionAnswerUncheckedCreateNestedManyWithoutQuestionChoiceInput } from '../multiple-choice-question-answer/multiple-choice-question-answer-unchecked-create-nested-many-without-question-choice.input';

@InputType()
export class MultipleChoiceQuestionChoiceUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    choice!: string;

    @Field(() => String, {nullable:false})
    questionId!: string;

    @Field(() => Boolean, {nullable:true})
    correct?: boolean;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => MultipleChoiceQuestionAnswerUncheckedCreateNestedManyWithoutQuestionChoiceInput, {nullable:true})
    answers?: MultipleChoiceQuestionAnswerUncheckedCreateNestedManyWithoutQuestionChoiceInput;
}
