import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class QuestionCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    questionType!: number;

    @Field(() => Int, {nullable:false})
    points!: number;

    @Field(() => Int, {nullable:false})
    multipleChoiceQuestionId!: number;

    @Field(() => Int, {nullable:false})
    programmingQuestionId!: number;

    @Field(() => Int, {nullable:false})
    assessmentId!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
