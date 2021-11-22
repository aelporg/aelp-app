import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleFilesProgrammingQuestionUpdateWithoutBaseProgrammingQuestionInput } from './multiple-files-programming-question-update-without-base-programming-question.input';
import { MultipleFilesProgrammingQuestionCreateWithoutBaseProgrammingQuestionInput } from './multiple-files-programming-question-create-without-base-programming-question.input';

@InputType()
export class MultipleFilesProgrammingQuestionUpsertWithoutBaseProgrammingQuestionInput {

    @Field(() => MultipleFilesProgrammingQuestionUpdateWithoutBaseProgrammingQuestionInput, {nullable:false})
    update!: MultipleFilesProgrammingQuestionUpdateWithoutBaseProgrammingQuestionInput;

    @Field(() => MultipleFilesProgrammingQuestionCreateWithoutBaseProgrammingQuestionInput, {nullable:false})
    create!: MultipleFilesProgrammingQuestionCreateWithoutBaseProgrammingQuestionInput;
}
