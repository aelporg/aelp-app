import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleChoiceQuestionWhereInput } from './multiple-choice-question-where.input';
import { MultipleChoiceQuestionOrderByWithRelationInput } from './multiple-choice-question-order-by-with-relation.input';
import { MultipleChoiceQuestionWhereUniqueInput } from './multiple-choice-question-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MultipleChoiceQuestionScalarFieldEnum } from './multiple-choice-question-scalar-field.enum';

@ArgsType()
export class FindManyMultipleChoiceQuestionArgs {

    @Field(() => MultipleChoiceQuestionWhereInput, {nullable:true})
    where?: MultipleChoiceQuestionWhereInput;

    @Field(() => [MultipleChoiceQuestionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MultipleChoiceQuestionOrderByWithRelationInput>;

    @Field(() => MultipleChoiceQuestionWhereUniqueInput, {nullable:true})
    cursor?: MultipleChoiceQuestionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MultipleChoiceQuestionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MultipleChoiceQuestionScalarFieldEnum>;
}
