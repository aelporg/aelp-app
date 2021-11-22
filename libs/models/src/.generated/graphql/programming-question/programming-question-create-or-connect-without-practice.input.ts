import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionWhereUniqueInput } from './programming-question-where-unique.input';
import { ProgrammingQuestionCreateWithoutPracticeInput } from './programming-question-create-without-practice.input';

@InputType()
export class ProgrammingQuestionCreateOrConnectWithoutPracticeInput {

    @Field(() => ProgrammingQuestionWhereUniqueInput, {nullable:false})
    where!: ProgrammingQuestionWhereUniqueInput;

    @Field(() => ProgrammingQuestionCreateWithoutPracticeInput, {nullable:false})
    create!: ProgrammingQuestionCreateWithoutPracticeInput;
}
