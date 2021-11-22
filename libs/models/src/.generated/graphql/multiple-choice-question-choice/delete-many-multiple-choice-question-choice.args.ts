import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleChoiceQuestionChoiceWhereInput } from './multiple-choice-question-choice-where.input';

@ArgsType()
export class DeleteManyMultipleChoiceQuestionChoiceArgs {

    @Field(() => MultipleChoiceQuestionChoiceWhereInput, {nullable:true})
    where?: MultipleChoiceQuestionChoiceWhereInput;
}
