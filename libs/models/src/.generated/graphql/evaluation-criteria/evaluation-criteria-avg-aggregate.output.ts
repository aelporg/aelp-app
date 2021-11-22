import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class EvaluationCriteriaAvgAggregate {

    @Field(() => Float, {nullable:true})
    totalPoints?: number;
}
