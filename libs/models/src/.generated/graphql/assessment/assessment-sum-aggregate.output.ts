import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AssessmentSumAggregate {

    @Field(() => Int, {nullable:true})
    totalPoints?: number;
}
