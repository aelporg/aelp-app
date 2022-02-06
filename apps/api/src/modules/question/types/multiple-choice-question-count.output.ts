import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class MultipleChoiceQuestionCount {
  @Field(() => Int, { nullable: false })
  choices!: number
}
