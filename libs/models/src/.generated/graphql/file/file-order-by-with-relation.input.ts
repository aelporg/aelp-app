import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MultipleFilesProgrammingQuestionOrderByRelationAggregateInput } from '../multiple-files-programming-question/multiple-files-programming-question-order-by-relation-aggregate.input';
import { EnvironmentOrderByWithRelationInput } from '../environment/environment-order-by-with-relation.input';

@InputType()
export class FileOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    extension?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    data?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => MultipleFilesProgrammingQuestionOrderByRelationAggregateInput, {nullable:true})
    multipleFilesProgrammingQuestion?: MultipleFilesProgrammingQuestionOrderByRelationAggregateInput;

    @Field(() => EnvironmentOrderByWithRelationInput, {nullable:true})
    environment?: EnvironmentOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    environmentId?: keyof typeof SortOrder;
}
