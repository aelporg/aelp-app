import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CompetitionParticipantCountOrderByAggregateInput } from './competition-participant-count-order-by-aggregate.input';
import { CompetitionParticipantMaxOrderByAggregateInput } from './competition-participant-max-order-by-aggregate.input';
import { CompetitionParticipantMinOrderByAggregateInput } from './competition-participant-min-order-by-aggregate.input';

@InputType()
export class CompetitionParticipantOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    competitionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => CompetitionParticipantCountOrderByAggregateInput, {nullable:true})
    _count?: CompetitionParticipantCountOrderByAggregateInput;

    @Field(() => CompetitionParticipantMaxOrderByAggregateInput, {nullable:true})
    _max?: CompetitionParticipantMaxOrderByAggregateInput;

    @Field(() => CompetitionParticipantMinOrderByAggregateInput, {nullable:true})
    _min?: CompetitionParticipantMinOrderByAggregateInput;
}
