import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionWhereInput } from './multiple-choice-question-where.input';

@InputType()
export class MultipleChoiceQuestionRelationFilter {

    @Field(() => MultipleChoiceQuestionWhereInput, {nullable:true})
    is?: MultipleChoiceQuestionWhereInput;

    @Field(() => MultipleChoiceQuestionWhereInput, {nullable:true})
    isNot?: MultipleChoiceQuestionWhereInput;
}
