import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../../user/types/user.model';
import { Discussion } from './discussion.model';

@ObjectType()
export class DiscussionVote {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isUpvote!: boolean;

    @Field(() => String, {nullable:false})
    discussionId!: string;

    @Field(() => Discussion, {nullable:false})
    discussion?: Discussion;

    @Field(() => String, {nullable:false})
    userId!: string;
}
