import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionCreateWithoutSingleFileProgrammingQuestionInput } from './programming-question-create-without-single-file-programming-question.input';
import { ProgrammingQuestionCreateOrConnectWithoutSingleFileProgrammingQuestionInput } from './programming-question-create-or-connect-without-single-file-programming-question.input';
import { ProgrammingQuestionUpsertWithoutSingleFileProgrammingQuestionInput } from './programming-question-upsert-without-single-file-programming-question.input';
import { ProgrammingQuestionWhereUniqueInput } from './programming-question-where-unique.input';
import { ProgrammingQuestionUpdateWithoutSingleFileProgrammingQuestionInput } from './programming-question-update-without-single-file-programming-question.input';

@InputType()
export class ProgrammingQuestionUncheckedUpdateOneWithoutSingleFileProgrammingQuestionInput {

    @Field(() => ProgrammingQuestionCreateWithoutSingleFileProgrammingQuestionInput, {nullable:true})
    create?: ProgrammingQuestionCreateWithoutSingleFileProgrammingQuestionInput;

    @Field(() => ProgrammingQuestionCreateOrConnectWithoutSingleFileProgrammingQuestionInput, {nullable:true})
    connectOrCreate?: ProgrammingQuestionCreateOrConnectWithoutSingleFileProgrammingQuestionInput;

    @Field(() => ProgrammingQuestionUpsertWithoutSingleFileProgrammingQuestionInput, {nullable:true})
    upsert?: ProgrammingQuestionUpsertWithoutSingleFileProgrammingQuestionInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ProgrammingQuestionWhereUniqueInput, {nullable:true})
    connect?: ProgrammingQuestionWhereUniqueInput;

    @Field(() => ProgrammingQuestionUpdateWithoutSingleFileProgrammingQuestionInput, {nullable:true})
    update?: ProgrammingQuestionUpdateWithoutSingleFileProgrammingQuestionInput;
}
