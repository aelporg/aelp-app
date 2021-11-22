import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuestionAnswerUpdateManyMutationInput } from './question-answer-update-many-mutation.input';
import { QuestionAnswerWhereInput } from './question-answer-where.input';

@ArgsType()
export class UpdateManyQuestionAnswerArgs {

    @Field(() => QuestionAnswerUpdateManyMutationInput, {nullable:false})
    data!: QuestionAnswerUpdateManyMutationInput;

    @Field(() => QuestionAnswerWhereInput, {nullable:true})
    where?: QuestionAnswerWhereInput;
}
