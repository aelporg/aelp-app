import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class AssessmentAnswerAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    recPoints?: keyof typeof SortOrder;
}
