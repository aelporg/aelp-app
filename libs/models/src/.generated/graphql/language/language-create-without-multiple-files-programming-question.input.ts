import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SingleFileProgrammingQuestionCreateNestedManyWithoutAllowedLanguagesInput } from '../single-file-programming-question/single-file-programming-question-create-nested-many-without-allowed-languages.input';

@InputType()
export class LanguageCreateWithoutMultipleFilesProgrammingQuestionInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    extension!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => SingleFileProgrammingQuestionCreateNestedManyWithoutAllowedLanguagesInput, {nullable:true})
    singleFileQuestions?: SingleFileProgrammingQuestionCreateNestedManyWithoutAllowedLanguagesInput;
}
