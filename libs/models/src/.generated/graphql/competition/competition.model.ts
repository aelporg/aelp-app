import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Assessment } from '../assessment/assessment.model';
import { User } from '../user/user.model';
import { CompetitionParticipant } from '../competition-participant/competition-participant.model';
import { CompetitionCount } from './competition-count.output';

@ObjectType()
export class Competition {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isPrivate!: boolean;

    @Field(() => Assessment, {nullable:true})
    assessment?: Assessment | null;

    @Field(() => User, {nullable:false})
    creatorUser?: User;

    @Field(() => String, {nullable:false})
    creatorUserId!: string;

    @Field(() => [CompetitionParticipant], {nullable:true})
    participants?: Array<CompetitionParticipant>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => CompetitionCount, {nullable:false})
    _count?: CompetitionCount;
}
