import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionCreateNestedOneWithoutMultipleFilesProgrammingQuestionInput } from '../programming-question/programming-question-create-nested-one-without-multiple-files-programming-question.input';
import { FileCreateNestedManyWithoutMultipleFilesProgrammingQuestionInput } from '../file/file-create-nested-many-without-multiple-files-programming-question.input';

@InputType()
export class MultipleFilesProgrammingQuestionCreateWithoutLanguageInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ProgrammingQuestionCreateNestedOneWithoutMultipleFilesProgrammingQuestionInput, {nullable:true})
    baseProgrammingQuestion?: ProgrammingQuestionCreateNestedOneWithoutMultipleFilesProgrammingQuestionInput;

    @Field(() => FileCreateNestedManyWithoutMultipleFilesProgrammingQuestionInput, {nullable:true})
    defaultFiles?: FileCreateNestedManyWithoutMultipleFilesProgrammingQuestionInput;
}
