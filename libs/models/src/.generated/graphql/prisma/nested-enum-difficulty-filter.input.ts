import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Difficulty } from './difficulty.enum';

@InputType()
export class NestedEnumDifficultyFilter {

    @Field(() => Difficulty, {nullable:true})
    equals?: keyof typeof Difficulty;

    @Field(() => [Difficulty], {nullable:true})
    in?: Array<keyof typeof Difficulty>;

    @Field(() => [Difficulty], {nullable:true})
    notIn?: Array<keyof typeof Difficulty>;

    @Field(() => NestedEnumDifficultyFilter, {nullable:true})
    not?: NestedEnumDifficultyFilter;
}
