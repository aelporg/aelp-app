import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AssessmentCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    assessmentType!: number;

    @Field(() => Int, {nullable:false})
    startTime!: number;

    @Field(() => Int, {nullable:false})
    endTime!: number;

    @Field(() => Int, {nullable:false})
    submitAfterEnd!: number;

    @Field(() => Int, {nullable:false})
    totalPoints!: number;

    @Field(() => Int, {nullable:false})
    classroomId!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    competitionId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
