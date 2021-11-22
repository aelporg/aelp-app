import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleChoiceQuestionAnswerWhereUniqueInput } from './multiple-choice-question-answer-where-unique.input';

@ArgsType()
export class FindUniqueMultipleChoiceQuestionAnswerArgs {

    @Field(() => MultipleChoiceQuestionAnswerWhereUniqueInput, {nullable:false})
    where!: MultipleChoiceQuestionAnswerWhereUniqueInput;
}
