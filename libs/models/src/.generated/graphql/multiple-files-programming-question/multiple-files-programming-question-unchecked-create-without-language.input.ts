import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionUncheckedCreateNestedOneWithoutMultipleFilesProgrammingQuestionInput } from '../programming-question/programming-question-unchecked-create-nested-one-without-multiple-files-programming-question.input';

@InputType()
export class MultipleFilesProgrammingQuestionUncheckedCreateWithoutLanguageInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ProgrammingQuestionUncheckedCreateNestedOneWithoutMultipleFilesProgrammingQuestionInput, {nullable:true})
    baseProgrammingQuestion?: ProgrammingQuestionUncheckedCreateNestedOneWithoutMultipleFilesProgrammingQuestionInput;
}
