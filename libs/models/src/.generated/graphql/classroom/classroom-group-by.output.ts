import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ClassroomCountAggregate } from './classroom-count-aggregate.output';
import { ClassroomMinAggregate } from './classroom-min-aggregate.output';
import { ClassroomMaxAggregate } from './classroom-max-aggregate.output';

@ObjectType()
export class ClassroomGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    subject?: string;

    @Field(() => String, {nullable:true})
    section?: string;

    @Field(() => String, {nullable:false})
    inviteCode!: string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => ClassroomCountAggregate, {nullable:true})
    _count?: ClassroomCountAggregate;

    @Field(() => ClassroomMinAggregate, {nullable:true})
    _min?: ClassroomMinAggregate;

    @Field(() => ClassroomMaxAggregate, {nullable:true})
    _max?: ClassroomMaxAggregate;
}
