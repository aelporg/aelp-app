import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CompetitionParticipantScalarWhereInput {

    @Field(() => [CompetitionParticipantScalarWhereInput], {nullable:true})
    AND?: Array<CompetitionParticipantScalarWhereInput>;

    @Field(() => [CompetitionParticipantScalarWhereInput], {nullable:true})
    OR?: Array<CompetitionParticipantScalarWhereInput>;

    @Field(() => [CompetitionParticipantScalarWhereInput], {nullable:true})
    NOT?: Array<CompetitionParticipantScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    competitionId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
