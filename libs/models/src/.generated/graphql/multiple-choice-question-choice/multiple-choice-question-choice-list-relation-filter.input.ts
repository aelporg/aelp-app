import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionChoiceWhereInput } from './multiple-choice-question-choice-where.input';

@InputType()
export class MultipleChoiceQuestionChoiceListRelationFilter {

    @Field(() => MultipleChoiceQuestionChoiceWhereInput, {nullable:true})
    every?: MultipleChoiceQuestionChoiceWhereInput;

    @Field(() => MultipleChoiceQuestionChoiceWhereInput, {nullable:true})
    some?: MultipleChoiceQuestionChoiceWhereInput;

    @Field(() => MultipleChoiceQuestionChoiceWhereInput, {nullable:true})
    none?: MultipleChoiceQuestionChoiceWhereInput;
}
