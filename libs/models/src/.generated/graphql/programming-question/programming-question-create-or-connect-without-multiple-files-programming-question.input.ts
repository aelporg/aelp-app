import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionWhereUniqueInput } from './programming-question-where-unique.input';
import { ProgrammingQuestionCreateWithoutMultipleFilesProgrammingQuestionInput } from './programming-question-create-without-multiple-files-programming-question.input';

@InputType()
export class ProgrammingQuestionCreateOrConnectWithoutMultipleFilesProgrammingQuestionInput {

    @Field(() => ProgrammingQuestionWhereUniqueInput, {nullable:false})
    where!: ProgrammingQuestionWhereUniqueInput;

    @Field(() => ProgrammingQuestionCreateWithoutMultipleFilesProgrammingQuestionInput, {nullable:false})
    create!: ProgrammingQuestionCreateWithoutMultipleFilesProgrammingQuestionInput;
}
