import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionCreateWithoutMultipleFilesProgrammingQuestionInput } from './programming-question-create-without-multiple-files-programming-question.input';
import { ProgrammingQuestionCreateOrConnectWithoutMultipleFilesProgrammingQuestionInput } from './programming-question-create-or-connect-without-multiple-files-programming-question.input';
import { ProgrammingQuestionUpsertWithoutMultipleFilesProgrammingQuestionInput } from './programming-question-upsert-without-multiple-files-programming-question.input';
import { ProgrammingQuestionWhereUniqueInput } from './programming-question-where-unique.input';
import { ProgrammingQuestionUpdateWithoutMultipleFilesProgrammingQuestionInput } from './programming-question-update-without-multiple-files-programming-question.input';

@InputType()
export class ProgrammingQuestionUpdateOneWithoutMultipleFilesProgrammingQuestionInput {

    @Field(() => ProgrammingQuestionCreateWithoutMultipleFilesProgrammingQuestionInput, {nullable:true})
    create?: ProgrammingQuestionCreateWithoutMultipleFilesProgrammingQuestionInput;

    @Field(() => ProgrammingQuestionCreateOrConnectWithoutMultipleFilesProgrammingQuestionInput, {nullable:true})
    connectOrCreate?: ProgrammingQuestionCreateOrConnectWithoutMultipleFilesProgrammingQuestionInput;

    @Field(() => ProgrammingQuestionUpsertWithoutMultipleFilesProgrammingQuestionInput, {nullable:true})
    upsert?: ProgrammingQuestionUpsertWithoutMultipleFilesProgrammingQuestionInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ProgrammingQuestionWhereUniqueInput, {nullable:true})
    connect?: ProgrammingQuestionWhereUniqueInput;

    @Field(() => ProgrammingQuestionUpdateWithoutMultipleFilesProgrammingQuestionInput, {nullable:true})
    update?: ProgrammingQuestionUpdateWithoutMultipleFilesProgrammingQuestionInput;
}
