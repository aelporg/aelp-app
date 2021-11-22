import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class QuestionAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    points?: keyof typeof SortOrder;
}
