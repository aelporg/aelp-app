import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionCreateNestedOneWithoutMultipleChoiceQuestionInput } from '../question/question-create-nested-one-without-multiple-choice-question.input';

@InputType()
export class MultipleChoiceQuestionCreateWithoutChoicesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => QuestionCreateNestedOneWithoutMultipleChoiceQuestionInput, {nullable:true})
    baseQuestion?: QuestionCreateNestedOneWithoutMultipleChoiceQuestionInput;
}
