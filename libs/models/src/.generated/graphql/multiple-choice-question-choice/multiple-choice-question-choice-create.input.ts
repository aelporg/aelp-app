import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionCreateNestedOneWithoutChoicesInput } from '../multiple-choice-question/multiple-choice-question-create-nested-one-without-choices.input';
import { MultipleChoiceQuestionAnswerCreateNestedManyWithoutQuestionChoiceInput } from '../multiple-choice-question-answer/multiple-choice-question-answer-create-nested-many-without-question-choice.input';

@InputType()
export class MultipleChoiceQuestionChoiceCreateInput {

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

    @Field(() => MultipleChoiceQuestionCreateNestedOneWithoutChoicesInput, {nullable:false})
    question!: MultipleChoiceQuestionCreateNestedOneWithoutChoicesInput;

    @Field(() => MultipleChoiceQuestionAnswerCreateNestedManyWithoutQuestionChoiceInput, {nullable:true})
    answers?: MultipleChoiceQuestionAnswerCreateNestedManyWithoutQuestionChoiceInput;
}
