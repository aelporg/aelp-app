import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FileOrderByRelationAggregateInput } from '../file/file-order-by-relation-aggregate.input';
import { ProgrammingQuestionAnswerOrderByRelationAggregateInput } from '../programming-question-answer/programming-question-answer-order-by-relation-aggregate.input';
import { EnvironmentPermissionOrderByRelationAggregateInput } from '../environment-permission/environment-permission-order-by-relation-aggregate.input';

@InputType()
export class EnvironmentOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => FileOrderByRelationAggregateInput, {nullable:true})
    files?: FileOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    scratchPadData?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    submitted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ProgrammingQuestionAnswerOrderByRelationAggregateInput, {nullable:true})
    answers?: ProgrammingQuestionAnswerOrderByRelationAggregateInput;

    @Field(() => EnvironmentPermissionOrderByRelationAggregateInput, {nullable:true})
    permissions?: EnvironmentPermissionOrderByRelationAggregateInput;
}
