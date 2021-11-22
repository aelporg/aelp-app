import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionUpdateWithoutMultipleChoiceQuestionInput } from './question-update-without-multiple-choice-question.input';
import { QuestionCreateWithoutMultipleChoiceQuestionInput } from './question-create-without-multiple-choice-question.input';

@InputType()
export class QuestionUpsertWithoutMultipleChoiceQuestionInput {

    @Field(() => QuestionUpdateWithoutMultipleChoiceQuestionInput, {nullable:false})
    update!: QuestionUpdateWithoutMultipleChoiceQuestionInput;

    @Field(() => QuestionCreateWithoutMultipleChoiceQuestionInput, {nullable:false})
    create!: QuestionCreateWithoutMultipleChoiceQuestionInput;
}
