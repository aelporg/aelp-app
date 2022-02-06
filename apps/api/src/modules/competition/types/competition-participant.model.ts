import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Competition } from './competition.model'
import { User } from '../../user/types/user.model'

@ObjectType()
export class CompetitionParticipant {
  @Field(() => User, { nullable: false })
  user?: User

  @Field(() => String, { nullable: false })
  userId!: string

  @Field(() => Competition, { nullable: false })
  competition?: Competition

  @Field(() => String, { nullable: false })
  competitionId!: string

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => Date, { nullable: false })
  updatedAt!: Date
}
