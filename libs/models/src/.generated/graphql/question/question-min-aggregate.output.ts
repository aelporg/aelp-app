import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { QuestionType } from '../prisma/question-type.enum';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class QuestionMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => QuestionType, {nullable:true})
    questionType?: keyof typeof QuestionType;

    @Field(() => Int, {nullable:true})
    points?: number;

    @Field(() => String, {nullable:true})
    multipleChoiceQuestionId?: string;

    @Field(() => String, {nullable:true})
    programmingQuestionId?: string;

    @Field(() => String, {nullable:true})
    assessmentId?: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
