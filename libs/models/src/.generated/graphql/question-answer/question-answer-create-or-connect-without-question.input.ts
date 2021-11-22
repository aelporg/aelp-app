import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionAnswerWhereUniqueInput } from './question-answer-where-unique.input';
import { QuestionAnswerCreateWithoutQuestionInput } from './question-answer-create-without-question.input';

@InputType()
export class QuestionAnswerCreateOrConnectWithoutQuestionInput {

    @Field(() => QuestionAnswerWhereUniqueInput, {nullable:false})
    where!: QuestionAnswerWhereUniqueInput;

    @Field(() => QuestionAnswerCreateWithoutQuestionInput, {nullable:false})
    create!: QuestionAnswerCreateWithoutQuestionInput;
}
