import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class EvaluationResultAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    evaulationPoints?: keyof typeof SortOrder;
}
