import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PracticeProgrammingQuestionCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    questionId!: number;

    @Field(() => Int, {nullable:false})
    diffculty!: number;

    @Field(() => Int, {nullable:false})
    classroomId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
