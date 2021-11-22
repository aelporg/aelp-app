import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class EvaluationCriteriaAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    totalPoints?: keyof typeof SortOrder;
}
