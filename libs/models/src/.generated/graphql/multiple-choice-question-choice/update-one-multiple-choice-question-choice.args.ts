import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleChoiceQuestionChoiceUpdateInput } from './multiple-choice-question-choice-update.input';
import { MultipleChoiceQuestionChoiceWhereUniqueInput } from './multiple-choice-question-choice-where-unique.input';

@ArgsType()
export class UpdateOneMultipleChoiceQuestionChoiceArgs {

    @Field(() => MultipleChoiceQuestionChoiceUpdateInput, {nullable:false})
    data!: MultipleChoiceQuestionChoiceUpdateInput;

    @Field(() => MultipleChoiceQuestionChoiceWhereUniqueInput, {nullable:false})
    where!: MultipleChoiceQuestionChoiceWhereUniqueInput;
}
