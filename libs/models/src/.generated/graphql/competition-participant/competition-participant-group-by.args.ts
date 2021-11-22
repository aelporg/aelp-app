import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CompetitionParticipantWhereInput } from './competition-participant-where.input';
import { CompetitionParticipantOrderByWithAggregationInput } from './competition-participant-order-by-with-aggregation.input';
import { CompetitionParticipantScalarFieldEnum } from './competition-participant-scalar-field.enum';
import { CompetitionParticipantScalarWhereWithAggregatesInput } from './competition-participant-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CompetitionParticipantCountAggregateInput } from './competition-participant-count-aggregate.input';
import { CompetitionParticipantMinAggregateInput } from './competition-participant-min-aggregate.input';
import { CompetitionParticipantMaxAggregateInput } from './competition-participant-max-aggregate.input';

@ArgsType()
export class CompetitionParticipantGroupByArgs {

    @Field(() => CompetitionParticipantWhereInput, {nullable:true})
    where?: CompetitionParticipantWhereInput;

    @Field(() => [CompetitionParticipantOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CompetitionParticipantOrderByWithAggregationInput>;

    @Field(() => [CompetitionParticipantScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CompetitionParticipantScalarFieldEnum>;

    @Field(() => CompetitionParticipantScalarWhereWithAggregatesInput, {nullable:true})
    having?: CompetitionParticipantScalarWhereWithAggregatesInput;

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
