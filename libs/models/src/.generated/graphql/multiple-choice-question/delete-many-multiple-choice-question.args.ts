import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleChoiceQuestionWhereInput } from './multiple-choice-question-where.input';

@ArgsType()
export class DeleteManyMultipleChoiceQuestionArgs {

    @Field(() => MultipleChoiceQuestionWhereInput, {nullable:true})
    where?: MultipleChoiceQuestionWhereInput;
}
