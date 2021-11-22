import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionAnswerCreateWithoutMultipleChoiceQuestionAnswerInput } from './question-answer-create-without-multiple-choice-question-answer.input';
import { QuestionAnswerCreateOrConnectWithoutMultipleChoiceQuestionAnswerInput } from './question-answer-create-or-connect-without-multiple-choice-question-answer.input';
import { QuestionAnswerWhereUniqueInput } from './question-answer-where-unique.input';

@InputType()
export class QuestionAnswerCreateNestedOneWithoutMultipleChoiceQuestionAnswerInput {

    @Field(() => QuestionAnswerCreateWithoutMultipleChoiceQuestionAnswerInput, {nullable:true})
    create?: QuestionAnswerCreateWithoutMultipleChoiceQuestionAnswerInput;

    @Field(() => QuestionAnswerCreateOrConnectWithoutMultipleChoiceQuestionAnswerInput, {nullable:true})
    connectOrCreate?: QuestionAnswerCreateOrConnectWithoutMultipleChoiceQuestionAnswerInput;

    @Field(() => QuestionAnswerWhereUniqueInput, {nullable:true})
    connect?: QuestionAnswerWhereUniqueInput;
}
