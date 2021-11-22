import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProgrammingQuestionCountAggregate } from './programming-question-count-aggregate.output';
import { ProgrammingQuestionMinAggregate } from './programming-question-min-aggregate.output';
import { ProgrammingQuestionMaxAggregate } from './programming-question-max-aggregate.output';

@ObjectType()
export class AggregateProgrammingQuestion {

    @Field(() => ProgrammingQuestionCountAggregate, {nullable:true})
    _count?: ProgrammingQuestionCountAggregate;

    @Field(() => ProgrammingQuestionMinAggregate, {nullable:true})
    _min?: ProgrammingQuestionMinAggregate;

    @Field(() => ProgrammingQuestionMaxAggregate, {nullable:true})
    _max?: ProgrammingQuestionMaxAggregate;
}
