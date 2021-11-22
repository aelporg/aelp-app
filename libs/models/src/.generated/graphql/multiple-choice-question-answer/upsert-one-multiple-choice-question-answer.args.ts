import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleChoiceQuestionAnswerWhereUniqueInput } from './multiple-choice-question-answer-where-unique.input';
import { MultipleChoiceQuestionAnswerCreateInput } from './multiple-choice-question-answer-create.input';
import { MultipleChoiceQuestionAnswerUpdateInput } from './multiple-choice-question-answer-update.input';

@ArgsType()
export class UpsertOneMultipleChoiceQuestionAnswerArgs {

    @Field(() => MultipleChoiceQuestionAnswerWhereUniqueInput, {nullable:false})
    where!: MultipleChoiceQuestionAnswerWhereUniqueInput;

    @Field(() => MultipleChoiceQuestionAnswerCreateInput, {nullable:false})
    create!: MultipleChoiceQuestionAnswerCreateInput;

    @Field(() => MultipleChoiceQuestionAnswerUpdateInput, {nullable:false})
    update!: MultipleChoiceQuestionAnswerUpdateInput;
}
