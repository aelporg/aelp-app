import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleChoiceQuestionAnswerUpdateManyMutationInput } from './multiple-choice-question-answer-update-many-mutation.input';
import { MultipleChoiceQuestionAnswerWhereInput } from './multiple-choice-question-answer-where.input';

@ArgsType()
export class UpdateManyMultipleChoiceQuestionAnswerArgs {

    @Field(() => MultipleChoiceQuestionAnswerUpdateManyMutationInput, {nullable:false})
    data!: MultipleChoiceQuestionAnswerUpdateManyMutationInput;

    @Field(() => MultipleChoiceQuestionAnswerWhereInput, {nullable:true})
    where?: MultipleChoiceQuestionAnswerWhereInput;
}
