import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class QuestionAnswerMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    questionId?: string;

    @Field(() => String, {nullable:true})
    multipleChoiceQuestionAnswerId?: string;

    @Field(() => String, {nullable:true})
    programmingQuestionAnswerId?: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    assessmentSubmissionId?: string;

    @Field(() => Int, {nullable:true})
    points?: number;

    @Field(() => String, {nullable:true})
    userId?: string;
}
