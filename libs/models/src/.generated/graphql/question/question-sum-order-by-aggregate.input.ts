import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class QuestionSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    points?: keyof typeof SortOrder;
}
