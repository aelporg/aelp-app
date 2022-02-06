import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class CompetitionCount {
  @Field(() => Int, { nullable: false })
  participants!: number
}
