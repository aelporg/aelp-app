import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionUpdateWithoutPracticeInput } from './programming-question-update-without-practice.input';
import { ProgrammingQuestionCreateWithoutPracticeInput } from './programming-question-create-without-practice.input';

@InputType()
export class ProgrammingQuestionUpsertWithoutPracticeInput {

    @Field(() => ProgrammingQuestionUpdateWithoutPracticeInput, {nullable:false})
    update!: ProgrammingQuestionUpdateWithoutPracticeInput;

    @Field(() => ProgrammingQuestionCreateWithoutPracticeInput, {nullable:false})
    create!: ProgrammingQuestionCreateWithoutPracticeInput;
}
