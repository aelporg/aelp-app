import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleChoiceQuestionWhereUniqueInput } from './multiple-choice-question-where-unique.input';

@ArgsType()
export class FindUniqueMultipleChoiceQuestionArgs {

    @Field(() => MultipleChoiceQuestionWhereUniqueInput, {nullable:false})
    where!: MultipleChoiceQuestionWhereUniqueInput;
}
