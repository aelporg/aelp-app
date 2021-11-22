import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionChoiceUncheckedCreateNestedManyWithoutQuestionInput } from '../multiple-choice-question-choice/multiple-choice-question-choice-unchecked-create-nested-many-without-question.input';
import { QuestionUncheckedCreateNestedOneWithoutMultipleChoiceQuestionInput } from '../question/question-unchecked-create-nested-one-without-multiple-choice-question.input';

@InputType()
export class MultipleChoiceQuestionUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => MultipleChoiceQuestionChoiceUncheckedCreateNestedManyWithoutQuestionInput, {nullable:true})
    choices?: MultipleChoiceQuestionChoiceUncheckedCreateNestedManyWithoutQuestionInput;

    @Field(() => QuestionUncheckedCreateNestedOneWithoutMultipleChoiceQuestionInput, {nullable:true})
    baseQuestion?: QuestionUncheckedCreateNestedOneWithoutMultipleChoiceQuestionInput;
}
