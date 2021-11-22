import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageCreateNestedOneWithoutMultipleFilesProgrammingQuestionInput } from '../language/language-create-nested-one-without-multiple-files-programming-question.input';
import { ProgrammingQuestionCreateNestedOneWithoutMultipleFilesProgrammingQuestionInput } from '../programming-question/programming-question-create-nested-one-without-multiple-files-programming-question.input';
import { FileCreateNestedManyWithoutMultipleFilesProgrammingQuestionInput } from '../file/file-create-nested-many-without-multiple-files-programming-question.input';

@InputType()
export class MultipleFilesProgrammingQuestionCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => LanguageCreateNestedOneWithoutMultipleFilesProgrammingQuestionInput, {nullable:false})
    language!: LanguageCreateNestedOneWithoutMultipleFilesProgrammingQuestionInput;

    @Field(() => ProgrammingQuestionCreateNestedOneWithoutMultipleFilesProgrammingQuestionInput, {nullable:true})
    baseProgrammingQuestion?: ProgrammingQuestionCreateNestedOneWithoutMultipleFilesProgrammingQuestionInput;

    @Field(() => FileCreateNestedManyWithoutMultipleFilesProgrammingQuestionInput, {nullable:true})
    defaultFiles?: FileCreateNestedManyWithoutMultipleFilesProgrammingQuestionInput;
}
