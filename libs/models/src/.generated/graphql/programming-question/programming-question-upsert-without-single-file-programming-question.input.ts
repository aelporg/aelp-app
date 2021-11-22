import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionUpdateWithoutSingleFileProgrammingQuestionInput } from './programming-question-update-without-single-file-programming-question.input';
import { ProgrammingQuestionCreateWithoutSingleFileProgrammingQuestionInput } from './programming-question-create-without-single-file-programming-question.input';

@InputType()
export class ProgrammingQuestionUpsertWithoutSingleFileProgrammingQuestionInput {

    @Field(() => ProgrammingQuestionUpdateWithoutSingleFileProgrammingQuestionInput, {nullable:false})
    update!: ProgrammingQuestionUpdateWithoutSingleFileProgrammingQuestionInput;

    @Field(() => ProgrammingQuestionCreateWithoutSingleFileProgrammingQuestionInput, {nullable:false})
    create!: ProgrammingQuestionCreateWithoutSingleFileProgrammingQuestionInput;
}
