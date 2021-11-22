import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionUpdateWithoutBaseQuestionInput } from './programming-question-update-without-base-question.input';
import { ProgrammingQuestionCreateWithoutBaseQuestionInput } from './programming-question-create-without-base-question.input';

@InputType()
export class ProgrammingQuestionUpsertWithoutBaseQuestionInput {

    @Field(() => ProgrammingQuestionUpdateWithoutBaseQuestionInput, {nullable:false})
    update!: ProgrammingQuestionUpdateWithoutBaseQuestionInput;

    @Field(() => ProgrammingQuestionCreateWithoutBaseQuestionInput, {nullable:false})
    create!: ProgrammingQuestionCreateWithoutBaseQuestionInput;
}
