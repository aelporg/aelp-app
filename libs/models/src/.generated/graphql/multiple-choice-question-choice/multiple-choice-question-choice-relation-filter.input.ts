import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionChoiceWhereInput } from './multiple-choice-question-choice-where.input';

@InputType()
export class MultipleChoiceQuestionChoiceRelationFilter {

    @Field(() => MultipleChoiceQuestionChoiceWhereInput, {nullable:true})
    is?: MultipleChoiceQuestionChoiceWhereInput;

    @Field(() => MultipleChoiceQuestionChoiceWhereInput, {nullable:true})
    isNot?: MultipleChoiceQuestionChoiceWhereInput;
}
