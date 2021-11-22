import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionAnswerWhereUniqueInput } from './question-answer-where-unique.input';
import { QuestionAnswerUpdateWithoutQuestionInput } from './question-answer-update-without-question.input';

@InputType()
export class QuestionAnswerUpdateWithWhereUniqueWithoutQuestionInput {

    @Field(() => QuestionAnswerWhereUniqueInput, {nullable:false})
    where!: QuestionAnswerWhereUniqueInput;

    @Field(() => QuestionAnswerUpdateWithoutQuestionInput, {nullable:false})
    data!: QuestionAnswerUpdateWithoutQuestionInput;
}
