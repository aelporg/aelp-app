import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionCreateNestedOneWithoutChoicesInput } from '../multiple-choice-question/multiple-choice-question-create-nested-one-without-choices.input';

@InputType()
export class MultipleChoiceQuestionChoiceCreateWithoutAnswersInput {

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
}
