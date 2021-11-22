import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EvaluationResultWhereInput } from './evaluation-result-where.input';
import { EvaluationResultOrderByWithRelationInput } from './evaluation-result-order-by-with-relation.input';
import { EvaluationResultWhereUniqueInput } from './evaluation-result-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EvaluationResultScalarFieldEnum } from './evaluation-result-scalar-field.enum';

@ArgsType()
export class FindManyEvaluationResultArgs {

    @Field(() => EvaluationResultWhereInput, {nullable:true})
    where?: EvaluationResultWhereInput;

    @Field(() => [EvaluationResultOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EvaluationResultOrderByWithRelationInput>;

    @Field(() => EvaluationResultWhereUniqueInput, {nullable:true})
    cursor?: EvaluationResultWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [EvaluationResultScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EvaluationResultScalarFieldEnum>;
}
