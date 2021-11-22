import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProgrammingQuestionCount {

    @Field(() => Int, {nullable:false})
    evaluationCriterias!: number;
}
