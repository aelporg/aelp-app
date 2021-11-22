import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleFilesProgrammingQuestionCreateNestedManyWithoutLanguageInput } from '../multiple-files-programming-question/multiple-files-programming-question-create-nested-many-without-language.input';

@InputType()
export class LanguageCreateWithoutSingleFileQuestionsInput {

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

    @Field(() => MultipleFilesProgrammingQuestionCreateNestedManyWithoutLanguageInput, {nullable:true})
    MultipleFilesProgrammingQuestion?: MultipleFilesProgrammingQuestionCreateNestedManyWithoutLanguageInput;
}
