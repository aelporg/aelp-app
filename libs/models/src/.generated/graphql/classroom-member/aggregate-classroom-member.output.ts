import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ClassroomMemberCountAggregate } from './classroom-member-count-aggregate.output';
import { ClassroomMemberMinAggregate } from './classroom-member-min-aggregate.output';
import { ClassroomMemberMaxAggregate } from './classroom-member-max-aggregate.output';

@ObjectType()
export class AggregateClassroomMember {

    @Field(() => ClassroomMemberCountAggregate, {nullable:true})
    _count?: ClassroomMemberCountAggregate;

    @Field(() => ClassroomMemberMinAggregate, {nullable:true})
    _min?: ClassroomMemberMinAggregate;

    @Field(() => ClassroomMemberMaxAggregate, {nullable:true})
    _max?: ClassroomMemberMaxAggregate;
}
