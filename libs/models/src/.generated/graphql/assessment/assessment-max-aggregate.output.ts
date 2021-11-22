import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AssessmentType } from '../prisma/assessment-type.enum';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AssessmentMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => AssessmentType, {nullable:true})
    assessmentType?: keyof typeof AssessmentType;

    @Field(() => Date, {nullable:true})
    startTime?: Date | string;

    @Field(() => Date, {nullable:true})
    endTime?: Date | string;

    @Field(() => Boolean, {nullable:true})
    submitAfterEnd?: boolean;

    @Field(() => Int, {nullable:true})
    totalPoints?: number;

    @Field(() => String, {nullable:true})
    classroomId?: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    competitionId?: string;
}
