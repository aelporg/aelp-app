import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MultipleChoiceQuestionChoiceCount {

    @Field(() => Int, {nullable:false})
    answers!: number;
}
