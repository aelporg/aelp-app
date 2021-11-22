import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PracticeProgrammingQuestionUpdateWithoutQuestionInput } from './practice-programming-question-update-without-question.input';
import { PracticeProgrammingQuestionCreateWithoutQuestionInput } from './practice-programming-question-create-without-question.input';

@InputType()
export class PracticeProgrammingQuestionUpsertWithoutQuestionInput {

    @Field(() => PracticeProgrammingQuestionUpdateWithoutQuestionInput, {nullable:false})
    update!: PracticeProgrammingQuestionUpdateWithoutQuestionInput;

    @Field(() => PracticeProgrammingQuestionCreateWithoutQuestionInput, {nullable:false})
    create!: PracticeProgrammingQuestionCreateWithoutQuestionInput;
}
