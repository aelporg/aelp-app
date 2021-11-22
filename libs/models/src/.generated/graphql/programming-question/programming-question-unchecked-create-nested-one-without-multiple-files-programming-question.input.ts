import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionCreateWithoutMultipleFilesProgrammingQuestionInput } from './programming-question-create-without-multiple-files-programming-question.input';
import { ProgrammingQuestionCreateOrConnectWithoutMultipleFilesProgrammingQuestionInput } from './programming-question-create-or-connect-without-multiple-files-programming-question.input';
import { ProgrammingQuestionWhereUniqueInput } from './programming-question-where-unique.input';

@InputType()
export class ProgrammingQuestionUncheckedCreateNestedOneWithoutMultipleFilesProgrammingQuestionInput {

    @Field(() => ProgrammingQuestionCreateWithoutMultipleFilesProgrammingQuestionInput, {nullable:true})
    create?: ProgrammingQuestionCreateWithoutMultipleFilesProgrammingQuestionInput;

    @Field(() => ProgrammingQuestionCreateOrConnectWithoutMultipleFilesProgrammingQuestionInput, {nullable:true})
    connectOrCreate?: ProgrammingQuestionCreateOrConnectWithoutMultipleFilesProgrammingQuestionInput;

    @Field(() => ProgrammingQuestionWhereUniqueInput, {nullable:true})
    connect?: ProgrammingQuestionWhereUniqueInput;
}
