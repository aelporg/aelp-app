import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../../user/types/user.model';
import { Discussion } from './discussion.model';

@ObjectType()
export class DiscussionResponce {

  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => User, { nullable: false })
  user?: User;

  @Field(() => String, { nullable: false })
  discussionId!: string;

  @Field(() => String, { nullable: false })
  responce!: string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Discussion, { nullable: false })
  discussion?: Discussion;

  @Field(() => String, { nullable: false })
  userId!: string;
}
