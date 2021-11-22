import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleChoiceQuestionChoiceWhereUniqueInput } from './multiple-choice-question-choice-where-unique.input';
import { MultipleChoiceQuestionChoiceCreateInput } from './multiple-choice-question-choice-create.input';
import { MultipleChoiceQuestionChoiceUpdateInput } from './multiple-choice-question-choice-update.input';

@ArgsType()
export class UpsertOneMultipleChoiceQuestionChoiceArgs {

    @Field(() => MultipleChoiceQuestionChoiceWhereUniqueInput, {nullable:false})
    where!: MultipleChoiceQuestionChoiceWhereUniqueInput;

    @Field(() => MultipleChoiceQuestionChoiceCreateInput, {nullable:false})
    create!: MultipleChoiceQuestionChoiceCreateInput;

    @Field(() => MultipleChoiceQuestionChoiceUpdateInput, {nullable:false})
    update!: MultipleChoiceQuestionChoiceUpdateInput;
}
