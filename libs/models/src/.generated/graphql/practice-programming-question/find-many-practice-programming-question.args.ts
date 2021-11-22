import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PracticeProgrammingQuestionWhereInput } from './practice-programming-question-where.input';
import { PracticeProgrammingQuestionOrderByWithRelationInput } from './practice-programming-question-order-by-with-relation.input';
import { PracticeProgrammingQuestionWhereUniqueInput } from './practice-programming-question-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PracticeProgrammingQuestionScalarFieldEnum } from './practice-programming-question-scalar-field.enum';

@ArgsType()
export class FindManyPracticeProgrammingQuestionArgs {

    @Field(() => PracticeProgrammingQuestionWhereInput, {nullable:true})
    where?: PracticeProgrammingQuestionWhereInput;

    @Field(() => [PracticeProgrammingQuestionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PracticeProgrammingQuestionOrderByWithRelationInput>;

    @Field(() => PracticeProgrammingQuestionWhereUniqueInput, {nullable:true})
    cursor?: PracticeProgrammingQuestionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PracticeProgrammingQuestionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PracticeProgrammingQuestionScalarFieldEnum>;
}
