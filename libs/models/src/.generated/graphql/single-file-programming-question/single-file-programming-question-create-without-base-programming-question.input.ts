import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageCreateNestedManyWithoutSingleFileQuestionsInput } from '../language/language-create-nested-many-without-single-file-questions.input';

@InputType()
export class SingleFileProgrammingQuestionCreateWithoutBaseProgrammingQuestionInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    defaultCode!: string;

    @Field(() => LanguageCreateNestedManyWithoutSingleFileQuestionsInput, {nullable:true})
    allowedLanguages?: LanguageCreateNestedManyWithoutSingleFileQuestionsInput;
}
