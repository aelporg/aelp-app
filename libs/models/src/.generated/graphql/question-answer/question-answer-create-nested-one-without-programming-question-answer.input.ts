import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionAnswerCreateWithoutProgrammingQuestionAnswerInput } from './question-answer-create-without-programming-question-answer.input';
import { QuestionAnswerCreateOrConnectWithoutProgrammingQuestionAnswerInput } from './question-answer-create-or-connect-without-programming-question-answer.input';
import { QuestionAnswerWhereUniqueInput } from './question-answer-where-unique.input';

@InputType()
export class QuestionAnswerCreateNestedOneWithoutProgrammingQuestionAnswerInput {

    @Field(() => QuestionAnswerCreateWithoutProgrammingQuestionAnswerInput, {nullable:true})
    create?: QuestionAnswerCreateWithoutProgrammingQuestionAnswerInput;

    @Field(() => QuestionAnswerCreateOrConnectWithoutProgrammingQuestionAnswerInput, {nullable:true})
    connectOrCreate?: QuestionAnswerCreateOrConnectWithoutProgrammingQuestionAnswerInput;

    @Field(() => QuestionAnswerWhereUniqueInput, {nullable:true})
    connect?: QuestionAnswerWhereUniqueInput;
}
