import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ClassroomRole } from '../prisma/classroom-role.enum';
import { ClassroomMemberCountAggregate } from './classroom-member-count-aggregate.output';
import { ClassroomMemberMinAggregate } from './classroom-member-min-aggregate.output';
import { ClassroomMemberMaxAggregate } from './classroom-member-max-aggregate.output';

@ObjectType()
export class ClassroomMemberGroupBy {

    @Field(() => String, {nullable:false})
    classroomId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => ClassroomRole, {nullable:false})
    classroomRole!: keyof typeof ClassroomRole;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => ClassroomMemberCountAggregate, {nullable:true})
    _count?: ClassroomMemberCountAggregate;

    @Field(() => ClassroomMemberMinAggregate, {nullable:true})
    _min?: ClassroomMemberMinAggregate;

    @Field(() => ClassroomMemberMaxAggregate, {nullable:true})
    _max?: ClassroomMemberMaxAggregate;
}
