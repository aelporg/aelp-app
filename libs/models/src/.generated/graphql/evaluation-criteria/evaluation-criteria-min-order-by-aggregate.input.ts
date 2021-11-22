import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class EvaluationCriteriaMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    totalPoints?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    inputOutputEvalCritId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    requiredToPass?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    programmingQuestionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hidden?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
}
