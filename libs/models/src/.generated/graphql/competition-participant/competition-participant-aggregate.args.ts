import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CompetitionParticipantWhereInput } from './competition-participant-where.input';
import { CompetitionParticipantOrderByWithRelationInput } from './competition-participant-order-by-with-relation.input';
import { CompetitionParticipantWhereUniqueInput } from './competition-participant-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CompetitionParticipantCountAggregateInput } from './competition-participant-count-aggregate.input';
import { CompetitionParticipantMinAggregateInput } from './competition-participant-min-aggregate.input';
import { CompetitionParticipantMaxAggregateInput } from './competition-participant-max-aggregate.input';

@ArgsType()
export class CompetitionParticipantAggregateArgs {

    @Field(() => CompetitionParticipantWhereInput, {nullable:true})
    where?: CompetitionParticipantWhereInput;

    @Field(() => [CompetitionParticipantOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CompetitionParticipantOrderByWithRelationInput>;

    @Field(() => CompetitionParticipantWhereUniqueInput, {nullable:true})
    cursor?: CompetitionParticipantWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CompetitionParticipantCountAggregateInput, {nullable:true})
    _count?: CompetitionParticipantCountAggregateInput;

    @Field(() => CompetitionParticipantMinAggregateInput, {nullable:true})
    _min?: CompetitionParticipantMinAggregateInput;

    @Field(() => CompetitionParticipantMaxAggregateInput, {nullable:true})
    _max?: CompetitionParticipantMaxAggregateInput;
}
