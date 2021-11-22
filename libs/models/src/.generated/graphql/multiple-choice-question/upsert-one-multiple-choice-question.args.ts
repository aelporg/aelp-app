import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleChoiceQuestionWhereUniqueInput } from './multiple-choice-question-where-unique.input';
import { MultipleChoiceQuestionCreateInput } from './multiple-choice-question-create.input';
import { MultipleChoiceQuestionUpdateInput } from './multiple-choice-question-update.input';

@ArgsType()
export class UpsertOneMultipleChoiceQuestionArgs {

    @Field(() => MultipleChoiceQuestionWhereUniqueInput, {nullable:false})
    where!: MultipleChoiceQuestionWhereUniqueInput;

    @Field(() => MultipleChoiceQuestionCreateInput, {nullable:false})
    create!: MultipleChoiceQuestionCreateInput;

    @Field(() => MultipleChoiceQuestionUpdateInput, {nullable:false})
    update!: MultipleChoiceQuestionUpdateInput;
}
