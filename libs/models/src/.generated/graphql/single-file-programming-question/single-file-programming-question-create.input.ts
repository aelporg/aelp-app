import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionCreateNestedOneWithoutSingleFileProgrammingQuestionInput } from '../programming-question/programming-question-create-nested-one-without-single-file-programming-question.input';
import { LanguageCreateNestedManyWithoutSingleFileQuestionsInput } from '../language/language-create-nested-many-without-single-file-questions.input';

@InputType()
export class SingleFileProgrammingQuestionCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    defaultCode!: string;

    @Field(() => ProgrammingQuestionCreateNestedOneWithoutSingleFileProgrammingQuestionInput, {nullable:true})
    baseProgrammingQuestion?: ProgrammingQuestionCreateNestedOneWithoutSingleFileProgrammingQuestionInput;

    @Field(() => LanguageCreateNestedManyWithoutSingleFileQuestionsInput, {nullable:true})
    allowedLanguages?: LanguageCreateNestedManyWithoutSingleFileQuestionsInput;
}
