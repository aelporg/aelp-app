import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionWhereUniqueInput } from './programming-question-where-unique.input';
import { ProgrammingQuestionCreateWithoutSingleFileProgrammingQuestionInput } from './programming-question-create-without-single-file-programming-question.input';

@InputType()
export class ProgrammingQuestionCreateOrConnectWithoutSingleFileProgrammingQuestionInput {

    @Field(() => ProgrammingQuestionWhereUniqueInput, {nullable:false})
    where!: ProgrammingQuestionWhereUniqueInput;

    @Field(() => ProgrammingQuestionCreateWithoutSingleFileProgrammingQuestionInput, {nullable:false})
    create!: ProgrammingQuestionCreateWithoutSingleFileProgrammingQuestionInput;
}
