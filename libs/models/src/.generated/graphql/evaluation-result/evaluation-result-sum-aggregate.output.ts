import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class EvaluationResultSumAggregate {

    @Field(() => Float, {nullable:true})
    evaulationPoints?: number;
}
