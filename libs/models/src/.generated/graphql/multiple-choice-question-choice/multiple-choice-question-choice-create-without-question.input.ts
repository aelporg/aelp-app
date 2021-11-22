import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionAnswerCreateNestedManyWithoutQuestionChoiceInput } from '../multiple-choice-question-answer/multiple-choice-question-answer-create-nested-many-without-question-choice.input';

@InputType()
export class MultipleChoiceQuestionChoiceCreateWithoutQuestionInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    choice!: string;

    @Field(() => Boolean, {nullable:true})
    correct?: boolean;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => MultipleChoiceQuestionAnswerCreateNestedManyWithoutQuestionChoiceInput, {nullable:true})
    answers?: MultipleChoiceQuestionAnswerCreateNestedManyWithoutQuestionChoiceInput;
}
