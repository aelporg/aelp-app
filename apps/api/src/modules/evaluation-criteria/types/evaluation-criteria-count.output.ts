import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EvaluationCriteriaCount {

    @Field(() => Int, {nullable:false})
    results!: number;
}
