import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionCreateWithoutPracticeInput } from './programming-question-create-without-practice.input';
import { ProgrammingQuestionCreateOrConnectWithoutPracticeInput } from './programming-question-create-or-connect-without-practice.input';
import { ProgrammingQuestionWhereUniqueInput } from './programming-question-where-unique.input';

@InputType()
export class ProgrammingQuestionCreateNestedOneWithoutPracticeInput {

    @Field(() => ProgrammingQuestionCreateWithoutPracticeInput, {nullable:true})
    create?: ProgrammingQuestionCreateWithoutPracticeInput;

    @Field(() => ProgrammingQuestionCreateOrConnectWithoutPracticeInput, {nullable:true})
    connectOrCreate?: ProgrammingQuestionCreateOrConnectWithoutPracticeInput;

    @Field(() => ProgrammingQuestionWhereUniqueInput, {nullable:true})
    connect?: ProgrammingQuestionWhereUniqueInput;
}
