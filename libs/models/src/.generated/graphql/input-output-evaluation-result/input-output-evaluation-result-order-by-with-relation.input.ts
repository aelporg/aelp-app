import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EvaluationResultOrderByWithRelationInput } from '../evaluation-result/evaluation-result-order-by-with-relation.input';

@InputType()
export class InputOutputEvaluationResultOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    resultOutputs?: keyof typeof SortOrder;

    @Field(() => EvaluationResultOrderByWithRelationInput, {nullable:true})
    baseEvaluationResult?: EvaluationResultOrderByWithRelationInput;
}
