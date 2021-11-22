import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AssessmentAnswerCount {

    @Field(() => Int, {nullable:false})
    questionsSubmissions!: number;
}
