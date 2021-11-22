import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProgrammingQuestionAnswerCountAggregate } from './programming-question-answer-count-aggregate.output';
import { ProgrammingQuestionAnswerMinAggregate } from './programming-question-answer-min-aggregate.output';
import { ProgrammingQuestionAnswerMaxAggregate } from './programming-question-answer-max-aggregate.output';

@ObjectType()
export class ProgrammingQuestionAnswerGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    envirnmentId!: string;

    @Field(() => ProgrammingQuestionAnswerCountAggregate, {nullable:true})
    _count?: ProgrammingQuestionAnswerCountAggregate;

    @Field(() => ProgrammingQuestionAnswerMinAggregate, {nullable:true})
    _min?: ProgrammingQuestionAnswerMinAggregate;

    @Field(() => ProgrammingQuestionAnswerMaxAggregate, {nullable:true})
    _max?: ProgrammingQuestionAnswerMaxAggregate;
}
