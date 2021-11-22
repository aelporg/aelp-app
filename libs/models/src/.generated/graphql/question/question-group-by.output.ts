import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { QuestionType } from '../prisma/question-type.enum';
import { Int } from '@nestjs/graphql';
import { QuestionCountAggregate } from './question-count-aggregate.output';
import { QuestionAvgAggregate } from './question-avg-aggregate.output';
import { QuestionSumAggregate } from './question-sum-aggregate.output';
import { QuestionMinAggregate } from './question-min-aggregate.output';
import { QuestionMaxAggregate } from './question-max-aggregate.output';

@ObjectType()
export class QuestionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => QuestionType, {nullable:false})
    questionType!: keyof typeof QuestionType;

    @Field(() => Int, {nullable:false})
    points!: number;

    @Field(() => String, {nullable:true})
    multipleChoiceQuestionId?: string;

    @Field(() => String, {nullable:true})
    programmingQuestionId?: string;

    @Field(() => String, {nullable:true})
    assessmentId?: string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => QuestionCountAggregate, {nullable:true})
    _count?: QuestionCountAggregate;

    @Field(() => QuestionAvgAggregate, {nullable:true})
    _avg?: QuestionAvgAggregate;

    @Field(() => QuestionSumAggregate, {nullable:true})
    _sum?: QuestionSumAggregate;

    @Field(() => QuestionMinAggregate, {nullable:true})
    _min?: QuestionMinAggregate;

    @Field(() => QuestionMaxAggregate, {nullable:true})
    _max?: QuestionMaxAggregate;
}
