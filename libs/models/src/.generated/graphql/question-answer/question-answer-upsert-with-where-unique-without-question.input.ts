import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionAnswerWhereUniqueInput } from './question-answer-where-unique.input';
import { QuestionAnswerUpdateWithoutQuestionInput } from './question-answer-update-without-question.input';
import { QuestionAnswerCreateWithoutQuestionInput } from './question-answer-create-without-question.input';

@InputType()
export class QuestionAnswerUpsertWithWhereUniqueWithoutQuestionInput {

    @Field(() => QuestionAnswerWhereUniqueInput, {nullable:false})
    where!: QuestionAnswerWhereUniqueInput;

    @Field(() => QuestionAnswerUpdateWithoutQuestionInput, {nullable:false})
    update!: QuestionAnswerUpdateWithoutQuestionInput;

    @Field(() => QuestionAnswerCreateWithoutQuestionInput, {nullable:false})
    create!: QuestionAnswerCreateWithoutQuestionInput;
}
