import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionUncheckedCreateNestedOneWithoutMultipleFilesProgrammingQuestionInput } from '../programming-question/programming-question-unchecked-create-nested-one-without-multiple-files-programming-question.input';

@InputType()
export class MultipleFilesProgrammingQuestionUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    languageId!: string;

    @Field(() => ProgrammingQuestionUncheckedCreateNestedOneWithoutMultipleFilesProgrammingQuestionInput, {nullable:true})
    baseProgrammingQuestion?: ProgrammingQuestionUncheckedCreateNestedOneWithoutMultipleFilesProgrammingQuestionInput;
}
