import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionAnswerWhereUniqueInput } from './question-answer-where-unique.input';
import { QuestionAnswerCreateWithoutMultipleChoiceQuestionAnswerInput } from './question-answer-create-without-multiple-choice-question-answer.input';

@InputType()
export class QuestionAnswerCreateOrConnectWithoutMultipleChoiceQuestionAnswerInput {

    @Field(() => QuestionAnswerWhereUniqueInput, {nullable:false})
    where!: QuestionAnswerWhereUniqueInput;

    @Field(() => QuestionAnswerCreateWithoutMultipleChoiceQuestionAnswerInput, {nullable:false})
    create!: QuestionAnswerCreateWithoutMultipleChoiceQuestionAnswerInput;
}
