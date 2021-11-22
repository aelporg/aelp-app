import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class EvaluationResultMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    evaluationCriteriaId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    evaulationPoints?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    inputOutputEvaluationResultId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    programmingQuestionAnswerId?: keyof typeof SortOrder;
}
