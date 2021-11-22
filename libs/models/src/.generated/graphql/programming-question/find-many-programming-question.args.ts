import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProgrammingQuestionWhereInput } from './programming-question-where.input';
import { ProgrammingQuestionOrderByWithRelationInput } from './programming-question-order-by-with-relation.input';
import { ProgrammingQuestionWhereUniqueInput } from './programming-question-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProgrammingQuestionScalarFieldEnum } from './programming-question-scalar-field.enum';

@ArgsType()
export class FindManyProgrammingQuestionArgs {

    @Field(() => ProgrammingQuestionWhereInput, {nullable:true})
    where?: ProgrammingQuestionWhereInput;

    @Field(() => [ProgrammingQuestionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProgrammingQuestionOrderByWithRelationInput>;

    @Field(() => ProgrammingQuestionWhereUniqueInput, {nullable:true})
    cursor?: ProgrammingQuestionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProgrammingQuestionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProgrammingQuestionScalarFieldEnum>;
}
