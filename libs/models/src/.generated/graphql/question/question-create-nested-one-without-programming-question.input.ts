import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionCreateWithoutProgrammingQuestionInput } from './question-create-without-programming-question.input';
import { QuestionCreateOrConnectWithoutProgrammingQuestionInput } from './question-create-or-connect-without-programming-question.input';
import { QuestionWhereUniqueInput } from './question-where-unique.input';

@InputType()
export class QuestionCreateNestedOneWithoutProgrammingQuestionInput {

    @Field(() => QuestionCreateWithoutProgrammingQuestionInput, {nullable:true})
    create?: QuestionCreateWithoutProgrammingQuestionInput;

    @Field(() => QuestionCreateOrConnectWithoutProgrammingQuestionInput, {nullable:true})
    connectOrCreate?: QuestionCreateOrConnectWithoutProgrammingQuestionInput;

    @Field(() => QuestionWhereUniqueInput, {nullable:true})
    connect?: QuestionWhereUniqueInput;
}
