import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AssessmentAnswerSumAggregate {

    @Field(() => Int, {nullable:true})
    recPoints?: number;
}
