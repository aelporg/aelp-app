import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleChoiceQuestionAnswerUpdateInput } from './multiple-choice-question-answer-update.input';
import { MultipleChoiceQuestionAnswerWhereUniqueInput } from './multiple-choice-question-answer-where-unique.input';

@ArgsType()
export class UpdateOneMultipleChoiceQuestionAnswerArgs {

    @Field(() => MultipleChoiceQuestionAnswerUpdateInput, {nullable:false})
    data!: MultipleChoiceQuestionAnswerUpdateInput;

    @Field(() => MultipleChoiceQuestionAnswerWhereUniqueInput, {nullable:false})
    where!: MultipleChoiceQuestionAnswerWhereUniqueInput;
}
