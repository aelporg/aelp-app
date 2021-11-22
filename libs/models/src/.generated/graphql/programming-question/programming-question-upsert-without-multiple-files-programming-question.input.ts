import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionUpdateWithoutMultipleFilesProgrammingQuestionInput } from './programming-question-update-without-multiple-files-programming-question.input';
import { ProgrammingQuestionCreateWithoutMultipleFilesProgrammingQuestionInput } from './programming-question-create-without-multiple-files-programming-question.input';

@InputType()
export class ProgrammingQuestionUpsertWithoutMultipleFilesProgrammingQuestionInput {

    @Field(() => ProgrammingQuestionUpdateWithoutMultipleFilesProgrammingQuestionInput, {nullable:false})
    update!: ProgrammingQuestionUpdateWithoutMultipleFilesProgrammingQuestionInput;

    @Field(() => ProgrammingQuestionCreateWithoutMultipleFilesProgrammingQuestionInput, {nullable:false})
    create!: ProgrammingQuestionCreateWithoutMultipleFilesProgrammingQuestionInput;
}
