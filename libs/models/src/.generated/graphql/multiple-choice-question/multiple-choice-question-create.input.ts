import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionChoiceCreateNestedManyWithoutQuestionInput } from '../multiple-choice-question-choice/multiple-choice-question-choice-create-nested-many-without-question.input';
import { QuestionCreateNestedOneWithoutMultipleChoiceQuestionInput } from '../question/question-create-nested-one-without-multiple-choice-question.input';

@InputType()
export class MultipleChoiceQuestionCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => MultipleChoiceQuestionChoiceCreateNestedManyWithoutQuestionInput, {nullable:true})
    choices?: MultipleChoiceQuestionChoiceCreateNestedManyWithoutQuestionInput;

    @Field(() => QuestionCreateNestedOneWithoutMultipleChoiceQuestionInput, {nullable:true})
    baseQuestion?: QuestionCreateNestedOneWithoutMultipleChoiceQuestionInput;
}
