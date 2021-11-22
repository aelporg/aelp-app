import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleChoiceQuestionChoiceWhereUniqueInput } from './multiple-choice-question-choice-where-unique.input';

@ArgsType()
export class DeleteOneMultipleChoiceQuestionChoiceArgs {

    @Field(() => MultipleChoiceQuestionChoiceWhereUniqueInput, {nullable:false})
    where!: MultipleChoiceQuestionChoiceWhereUniqueInput;
}
