import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MultipleChoiceQuestionAnswerCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    questionChoiceId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
