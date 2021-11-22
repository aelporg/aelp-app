import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuestionAnswerCreateInput } from './question-answer-create.input';

@ArgsType()
export class CreateOneQuestionAnswerArgs {

    @Field(() => QuestionAnswerCreateInput, {nullable:false})
    data!: QuestionAnswerCreateInput;
}
