import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionAnswerWhereUniqueInput } from './question-answer-where-unique.input';
import { QuestionAnswerCreateWithoutProgrammingQuestionAnswerInput } from './question-answer-create-without-programming-question-answer.input';

@InputType()
export class QuestionAnswerCreateOrConnectWithoutProgrammingQuestionAnswerInput {

    @Field(() => QuestionAnswerWhereUniqueInput, {nullable:false})
    where!: QuestionAnswerWhereUniqueInput;

    @Field(() => QuestionAnswerCreateWithoutProgrammingQuestionAnswerInput, {nullable:false})
    create!: QuestionAnswerCreateWithoutProgrammingQuestionAnswerInput;
}
