import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionUncheckedCreateNestedOneWithoutMultipleChoiceQuestionInput } from '../question/question-unchecked-create-nested-one-without-multiple-choice-question.input';

@InputType()
export class MultipleChoiceQuestionUncheckedCreateWithoutChoicesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => QuestionUncheckedCreateNestedOneWithoutMultipleChoiceQuestionInput, {nullable:true})
    baseQuestion?: QuestionUncheckedCreateNestedOneWithoutMultipleChoiceQuestionInput;
}
