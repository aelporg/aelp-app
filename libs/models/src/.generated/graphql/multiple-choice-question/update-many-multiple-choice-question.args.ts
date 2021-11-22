import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleChoiceQuestionUpdateManyMutationInput } from './multiple-choice-question-update-many-mutation.input';
import { MultipleChoiceQuestionWhereInput } from './multiple-choice-question-where.input';

@ArgsType()
export class UpdateManyMultipleChoiceQuestionArgs {

    @Field(() => MultipleChoiceQuestionUpdateManyMutationInput, {nullable:false})
    data!: MultipleChoiceQuestionUpdateManyMutationInput;

    @Field(() => MultipleChoiceQuestionWhereInput, {nullable:true})
    where?: MultipleChoiceQuestionWhereInput;
}
