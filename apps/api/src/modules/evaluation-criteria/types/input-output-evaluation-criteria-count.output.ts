import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class InputOutputEvaluationCriteriaCount {

    @Field(() => Int, {nullable:false})
    baseCriteria!: number;
}
