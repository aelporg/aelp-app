import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PracticeProgrammingQuestionCreateWithoutQuestionInput } from './practice-programming-question-create-without-question.input';
import { PracticeProgrammingQuestionCreateOrConnectWithoutQuestionInput } from './practice-programming-question-create-or-connect-without-question.input';
import { PracticeProgrammingQuestionWhereUniqueInput } from './practice-programming-question-where-unique.input';

@InputType()
export class PracticeProgrammingQuestionCreateNestedOneWithoutQuestionInput {

    @Field(() => PracticeProgrammingQuestionCreateWithoutQuestionInput, {nullable:true})
    create?: PracticeProgrammingQuestionCreateWithoutQuestionInput;

    @Field(() => PracticeProgrammingQuestionCreateOrConnectWithoutQuestionInput, {nullable:true})
    connectOrCreate?: PracticeProgrammingQuestionCreateOrConnectWithoutQuestionInput;

    @Field(() => PracticeProgrammingQuestionWhereUniqueInput, {nullable:true})
    connect?: PracticeProgrammingQuestionWhereUniqueInput;
}
