import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProgrammingQuestionAnswerCount {

    @Field(() => Int, {nullable:false})
    evaluationResults!: number;
}
