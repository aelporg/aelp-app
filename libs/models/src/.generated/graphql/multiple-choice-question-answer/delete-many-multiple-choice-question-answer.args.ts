import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleChoiceQuestionAnswerWhereInput } from './multiple-choice-question-answer-where.input';

@ArgsType()
export class DeleteManyMultipleChoiceQuestionAnswerArgs {

    @Field(() => MultipleChoiceQuestionAnswerWhereInput, {nullable:true})
    where?: MultipleChoiceQuestionAnswerWhereInput;
}
