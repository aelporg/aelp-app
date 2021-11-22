import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleChoiceQuestionAnswerCreateInput } from './multiple-choice-question-answer-create.input';

@ArgsType()
export class CreateOneMultipleChoiceQuestionAnswerArgs {

    @Field(() => MultipleChoiceQuestionAnswerCreateInput, {nullable:false})
    data!: MultipleChoiceQuestionAnswerCreateInput;
}
