import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleChoiceQuestionChoiceUpdateManyMutationInput } from './multiple-choice-question-choice-update-many-mutation.input';
import { MultipleChoiceQuestionChoiceWhereInput } from './multiple-choice-question-choice-where.input';

@ArgsType()
export class UpdateManyMultipleChoiceQuestionChoiceArgs {

    @Field(() => MultipleChoiceQuestionChoiceUpdateManyMutationInput, {nullable:false})
    data!: MultipleChoiceQuestionChoiceUpdateManyMutationInput;

    @Field(() => MultipleChoiceQuestionChoiceWhereInput, {nullable:true})
    where?: MultipleChoiceQuestionChoiceWhereInput;
}
