import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionCreateWithoutSingleFileProgrammingQuestionInput } from './programming-question-create-without-single-file-programming-question.input';
import { ProgrammingQuestionCreateOrConnectWithoutSingleFileProgrammingQuestionInput } from './programming-question-create-or-connect-without-single-file-programming-question.input';
import { ProgrammingQuestionWhereUniqueInput } from './programming-question-where-unique.input';

@InputType()
export class ProgrammingQuestionCreateNestedOneWithoutSingleFileProgrammingQuestionInput {

    @Field(() => ProgrammingQuestionCreateWithoutSingleFileProgrammingQuestionInput, {nullable:true})
    create?: ProgrammingQuestionCreateWithoutSingleFileProgrammingQuestionInput;

    @Field(() => ProgrammingQuestionCreateOrConnectWithoutSingleFileProgrammingQuestionInput, {nullable:true})
    connectOrCreate?: ProgrammingQuestionCreateOrConnectWithoutSingleFileProgrammingQuestionInput;

    @Field(() => ProgrammingQuestionWhereUniqueInput, {nullable:true})
    connect?: ProgrammingQuestionWhereUniqueInput;
}
