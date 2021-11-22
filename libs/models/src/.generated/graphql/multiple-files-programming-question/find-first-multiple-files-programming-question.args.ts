import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleFilesProgrammingQuestionWhereInput } from './multiple-files-programming-question-where.input';
import { MultipleFilesProgrammingQuestionOrderByWithRelationInput } from './multiple-files-programming-question-order-by-with-relation.input';
import { MultipleFilesProgrammingQuestionWhereUniqueInput } from './multiple-files-programming-question-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MultipleFilesProgrammingQuestionScalarFieldEnum } from './multiple-files-programming-question-scalar-field.enum';

@ArgsType()
export class FindFirstMultipleFilesProgrammingQuestionArgs {

    @Field(() => MultipleFilesProgrammingQuestionWhereInput, {nullable:true})
    where?: MultipleFilesProgrammingQuestionWhereInput;

    @Field(() => [MultipleFilesProgrammingQuestionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MultipleFilesProgrammingQuestionOrderByWithRelationInput>;

    @Field(() => MultipleFilesProgrammingQuestionWhereUniqueInput, {nullable:true})
    cursor?: MultipleFilesProgrammingQuestionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MultipleFilesProgrammingQuestionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MultipleFilesProgrammingQuestionScalarFieldEnum>;
}
