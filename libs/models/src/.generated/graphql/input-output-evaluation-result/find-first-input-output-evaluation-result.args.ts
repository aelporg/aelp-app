import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InputOutputEvaluationResultWhereInput } from './input-output-evaluation-result-where.input';
import { InputOutputEvaluationResultOrderByWithRelationInput } from './input-output-evaluation-result-order-by-with-relation.input';
import { InputOutputEvaluationResultWhereUniqueInput } from './input-output-evaluation-result-where-unique.input';
import { Int } from '@nestjs/graphql';
import { InputOutputEvaluationResultScalarFieldEnum } from './input-output-evaluation-result-scalar-field.enum';

@ArgsType()
export class FindFirstInputOutputEvaluationResultArgs {

    @Field(() => InputOutputEvaluationResultWhereInput, {nullable:true})
    where?: InputOutputEvaluationResultWhereInput;

    @Field(() => [InputOutputEvaluationResultOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InputOutputEvaluationResultOrderByWithRelationInput>;

    @Field(() => InputOutputEvaluationResultWhereUniqueInput, {nullable:true})
    cursor?: InputOutputEvaluationResultWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [InputOutputEvaluationResultScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof InputOutputEvaluationResultScalarFieldEnum>;
}
