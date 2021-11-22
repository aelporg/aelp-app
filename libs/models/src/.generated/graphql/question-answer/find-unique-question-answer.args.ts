import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuestionAnswerWhereUniqueInput } from './question-answer-where-unique.input';

@ArgsType()
export class FindUniqueQuestionAnswerArgs {

    @Field(() => QuestionAnswerWhereUniqueInput, {nullable:false})
    where!: QuestionAnswerWhereUniqueInput;
}
