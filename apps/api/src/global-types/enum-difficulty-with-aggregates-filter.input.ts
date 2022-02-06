import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Difficulty } from './difficulty.enum'
import { NestedEnumDifficultyWithAggregatesFilter } from './nested-enum-difficulty-with-aggregates-filter.input'
import { NestedIntFilter } from './nested-int-filter.input'
import { NestedEnumDifficultyFilter } from './nested-enum-difficulty-filter.input'

@InputType()
export class EnumDifficultyWithAggregatesFilter {
  @Field(() => Difficulty, { nullable: true })
  equals?: keyof typeof Difficulty;

  @Field(() => [Difficulty], { nullable: true })
  in?: Array<keyof typeof Difficulty>

  @Field(() => [Difficulty], { nullable: true })
  notIn?: Array<keyof typeof Difficulty>

  @Field(() => NestedEnumDifficultyWithAggregatesFilter, { nullable: true })
  not?: NestedEnumDifficultyWithAggregatesFilter

  @Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter

  @Field(() => NestedEnumDifficultyFilter, { nullable: true })
  _min?: NestedEnumDifficultyFilter

  @Field(() => NestedEnumDifficultyFilter, { nullable: true })
  _max?: NestedEnumDifficultyFilter
}
