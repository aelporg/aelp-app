import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuestionAnswerUpdateInput } from './question-answer-update.input';
import { QuestionAnswerWhereUniqueInput } from './question-answer-where-unique.input';

@ArgsType()
export class UpdateOneQuestionAnswerArgs {

    @Field(() => QuestionAnswerUpdateInput, {nullable:false})
    data!: QuestionAnswerUpdateInput;

    @Field(() => QuestionAnswerWhereUniqueInput, {nullable:false})
    where!: QuestionAnswerWhereUniqueInput;
}
