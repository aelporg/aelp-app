import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionCreateNestedOneWithoutSingleFileProgrammingQuestionInput } from '../programming-question/programming-question-create-nested-one-without-single-file-programming-question.input';

@InputType()
export class SingleFileProgrammingQuestionCreateWithoutAllowedLanguagesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    defaultCode!: string;

    @Field(() => ProgrammingQuestionCreateNestedOneWithoutSingleFileProgrammingQuestionInput, {nullable:true})
    baseProgrammingQuestion?: ProgrammingQuestionCreateNestedOneWithoutSingleFileProgrammingQuestionInput;
}
