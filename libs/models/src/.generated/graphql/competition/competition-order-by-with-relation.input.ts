import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AssessmentOrderByWithRelationInput } from '../assessment/assessment-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { CompetitionParticipantOrderByRelationAggregateInput } from '../competition-participant/competition-participant-order-by-relation-aggregate.input';

@InputType()
export class CompetitionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isPrivate?: keyof typeof SortOrder;

    @Field(() => AssessmentOrderByWithRelationInput, {nullable:true})
    assessment?: AssessmentOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    creatorUser?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    creatorUserId?: keyof typeof SortOrder;

    @Field(() => CompetitionParticipantOrderByRelationAggregateInput, {nullable:true})
    participants?: CompetitionParticipantOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
