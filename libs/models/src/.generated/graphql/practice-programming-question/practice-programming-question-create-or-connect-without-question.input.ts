import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PracticeProgrammingQuestionWhereUniqueInput } from './practice-programming-question-where-unique.input';
import { PracticeProgrammingQuestionCreateWithoutQuestionInput } from './practice-programming-question-create-without-question.input';

@InputType()
export class PracticeProgrammingQuestionCreateOrConnectWithoutQuestionInput {

    @Field(() => PracticeProgrammingQuestionWhereUniqueInput, {nullable:false})
    where!: PracticeProgrammingQuestionWhereUniqueInput;

    @Field(() => PracticeProgrammingQuestionCreateWithoutQuestionInput, {nullable:false})
    create!: PracticeProgrammingQuestionCreateWithoutQuestionInput;
}
