import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleChoiceQuestionCreateInput } from './multiple-choice-question-create.input';

@ArgsType()
export class CreateOneMultipleChoiceQuestionArgs {

    @Field(() => MultipleChoiceQuestionCreateInput, {nullable:false})
    data!: MultipleChoiceQuestionCreateInput;
}
