import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PracticeProgrammingQuestionCountAggregate } from './practice-programming-question-count-aggregate.output';
import { PracticeProgrammingQuestionMinAggregate } from './practice-programming-question-min-aggregate.output';
import { PracticeProgrammingQuestionMaxAggregate } from './practice-programming-question-max-aggregate.output';

@ObjectType()
export class AggregatePracticeProgrammingQuestion {

    @Field(() => PracticeProgrammingQuestionCountAggregate, {nullable:true})
    _count?: PracticeProgrammingQuestionCountAggregate;

    @Field(() => PracticeProgrammingQuestionMinAggregate, {nullable:true})
    _min?: PracticeProgrammingQuestionMinAggregate;

    @Field(() => PracticeProgrammingQuestionMaxAggregate, {nullable:true})
    _max?: PracticeProgrammingQuestionMaxAggregate;
}
