import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SingleFileProgrammingQuestionCountAggregate } from './single-file-programming-question-count-aggregate.output';
import { SingleFileProgrammingQuestionMinAggregate } from './single-file-programming-question-min-aggregate.output';
import { SingleFileProgrammingQuestionMaxAggregate } from './single-file-programming-question-max-aggregate.output';

@ObjectType()
export class AggregateSingleFileProgrammingQuestion {

    @Field(() => SingleFileProgrammingQuestionCountAggregate, {nullable:true})
    _count?: SingleFileProgrammingQuestionCountAggregate;

    @Field(() => SingleFileProgrammingQuestionMinAggregate, {nullable:true})
    _min?: SingleFileProgrammingQuestionMinAggregate;

    @Field(() => SingleFileProgrammingQuestionMaxAggregate, {nullable:true})
    _max?: SingleFileProgrammingQuestionMaxAggregate;
}
