import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class AssessmentAnswerAvgAggregate {

    @Field(() => Float, {nullable:true})
    recPoints?: number;
}
