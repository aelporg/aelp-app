import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionAnswerUpdateWithoutBaseAnswerInput } from './programming-question-answer-update-without-base-answer.input';
import { ProgrammingQuestionAnswerCreateWithoutBaseAnswerInput } from './programming-question-answer-create-without-base-answer.input';

@InputType()
export class ProgrammingQuestionAnswerUpsertWithoutBaseAnswerInput {

    @Field(() => ProgrammingQuestionAnswerUpdateWithoutBaseAnswerInput, {nullable:false})
    update!: ProgrammingQuestionAnswerUpdateWithoutBaseAnswerInput;

    @Field(() => ProgrammingQuestionAnswerCreateWithoutBaseAnswerInput, {nullable:false})
    create!: ProgrammingQuestionAnswerCreateWithoutBaseAnswerInput;
}
