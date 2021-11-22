import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProgrammingQuestionCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    statementMrkdwn!: number;

    @Field(() => Int, {nullable:false})
    statementCompiled!: number;

    @Field(() => Int, {nullable:false})
    programmingQuestionType!: number;

    @Field(() => Int, {nullable:false})
    singleFileProgrammingQuestionId!: number;

    @Field(() => Int, {nullable:false})
    multipleFilesProgrammingQuestionId!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
