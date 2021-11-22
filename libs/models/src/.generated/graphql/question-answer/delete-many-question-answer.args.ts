import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuestionAnswerWhereInput } from './question-answer-where.input';

@ArgsType()
export class DeleteManyQuestionAnswerArgs {

    @Field(() => QuestionAnswerWhereInput, {nullable:true})
    where?: QuestionAnswerWhereInput;
}
