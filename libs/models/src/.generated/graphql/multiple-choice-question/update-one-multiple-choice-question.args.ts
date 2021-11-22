import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleChoiceQuestionUpdateInput } from './multiple-choice-question-update.input';
import { MultipleChoiceQuestionWhereUniqueInput } from './multiple-choice-question-where-unique.input';

@ArgsType()
export class UpdateOneMultipleChoiceQuestionArgs {

    @Field(() => MultipleChoiceQuestionUpdateInput, {nullable:false})
    data!: MultipleChoiceQuestionUpdateInput;

    @Field(() => MultipleChoiceQuestionWhereUniqueInput, {nullable:false})
    where!: MultipleChoiceQuestionWhereUniqueInput;
}
