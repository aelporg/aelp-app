import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionUpdateWithoutProgrammingQuestionInput } from './question-update-without-programming-question.input';
import { QuestionCreateWithoutProgrammingQuestionInput } from './question-create-without-programming-question.input';

@InputType()
export class QuestionUpsertWithoutProgrammingQuestionInput {

    @Field(() => QuestionUpdateWithoutProgrammingQuestionInput, {nullable:false})
    update!: QuestionUpdateWithoutProgrammingQuestionInput;

    @Field(() => QuestionCreateWithoutProgrammingQuestionInput, {nullable:false})
    create!: QuestionCreateWithoutProgrammingQuestionInput;
}
