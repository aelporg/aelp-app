import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleChoiceQuestionChoiceCreateInput } from './multiple-choice-question-choice-create.input';

@ArgsType()
export class CreateOneMultipleChoiceQuestionChoiceArgs {

    @Field(() => MultipleChoiceQuestionChoiceCreateInput, {nullable:false})
    data!: MultipleChoiceQuestionChoiceCreateInput;
}
