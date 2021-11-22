import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleChoiceQuestionChoiceWhereInput } from './multiple-choice-question-choice-where.input';
import { MultipleChoiceQuestionChoiceOrderByWithRelationInput } from './multiple-choice-question-choice-order-by-with-relation.input';
import { MultipleChoiceQuestionChoiceWhereUniqueInput } from './multiple-choice-question-choice-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MultipleChoiceQuestionChoiceScalarFieldEnum } from './multiple-choice-question-choice-scalar-field.enum';

@ArgsType()
export class FindFirstMultipleChoiceQuestionChoiceArgs {

    @Field(() => MultipleChoiceQuestionChoiceWhereInput, {nullable:true})
    where?: MultipleChoiceQuestionChoiceWhereInput;

    @Field(() => [MultipleChoiceQuestionChoiceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MultipleChoiceQuestionChoiceOrderByWithRelationInput>;

    @Field(() => MultipleChoiceQuestionChoiceWhereUniqueInput, {nullable:true})
    cursor?: MultipleChoiceQuestionChoiceWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MultipleChoiceQuestionChoiceScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MultipleChoiceQuestionChoiceScalarFieldEnum>;
}
