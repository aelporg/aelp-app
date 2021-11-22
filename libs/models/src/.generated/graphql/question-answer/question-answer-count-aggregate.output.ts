import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class QuestionAnswerCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    questionId!: number;

    @Field(() => Int, {nullable:false})
    multipleChoiceQuestionAnswerId!: number;

    @Field(() => Int, {nullable:false})
    programmingQuestionAnswerId!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    assessmentSubmissionId!: number;

    @Field(() => Int, {nullable:false})
    points!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
