import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CompetitionParticipantCountAggregate } from './competition-participant-count-aggregate.output';
import { CompetitionParticipantMinAggregate } from './competition-participant-min-aggregate.output';
import { CompetitionParticipantMaxAggregate } from './competition-participant-max-aggregate.output';

@ObjectType()
export class CompetitionParticipantGroupBy {

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    competitionId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => CompetitionParticipantCountAggregate, {nullable:true})
    _count?: CompetitionParticipantCountAggregate;

    @Field(() => CompetitionParticipantMinAggregate, {nullable:true})
    _min?: CompetitionParticipantMinAggregate;

    @Field(() => CompetitionParticipantMaxAggregate, {nullable:true})
    _max?: CompetitionParticipantMaxAggregate;
}
