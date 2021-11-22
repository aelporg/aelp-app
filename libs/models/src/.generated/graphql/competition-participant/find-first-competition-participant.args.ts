import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CompetitionParticipantWhereInput } from './competition-participant-where.input';
import { CompetitionParticipantOrderByWithRelationInput } from './competition-participant-order-by-with-relation.input';
import { CompetitionParticipantWhereUniqueInput } from './competition-participant-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CompetitionParticipantScalarFieldEnum } from './competition-participant-scalar-field.enum';

@ArgsType()
export class FindFirstCompetitionParticipantArgs {

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

    @Field(() => [CompetitionParticipantScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CompetitionParticipantScalarFieldEnum>;
}
