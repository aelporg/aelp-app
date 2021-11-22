import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ClassroomCountAggregate } from './classroom-count-aggregate.output';
import { ClassroomMinAggregate } from './classroom-min-aggregate.output';
import { ClassroomMaxAggregate } from './classroom-max-aggregate.output';

@ObjectType()
export class AggregateClassroom {

    @Field(() => ClassroomCountAggregate, {nullable:true})
    _count?: ClassroomCountAggregate;

    @Field(() => ClassroomMinAggregate, {nullable:true})
    _min?: ClassroomMinAggregate;

    @Field(() => ClassroomMaxAggregate, {nullable:true})
    _max?: ClassroomMaxAggregate;
}
