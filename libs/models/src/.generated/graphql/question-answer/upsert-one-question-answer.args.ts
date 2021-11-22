import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuestionAnswerWhereUniqueInput } from './question-answer-where-unique.input';
import { QuestionAnswerCreateInput } from './question-answer-create.input';
import { QuestionAnswerUpdateInput } from './question-answer-update.input';

@ArgsType()
export class UpsertOneQuestionAnswerArgs {

    @Field(() => QuestionAnswerWhereUniqueInput, {nullable:false})
    where!: QuestionAnswerWhereUniqueInput;

    @Field(() => QuestionAnswerCreateInput, {nullable:false})
    create!: QuestionAnswerCreateInput;

    @Field(() => QuestionAnswerUpdateInput, {nullable:false})
    update!: QuestionAnswerUpdateInput;
}
