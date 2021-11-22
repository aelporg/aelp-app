import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AssessmentType } from '../prisma/assessment-type.enum';
import { Int } from '@nestjs/graphql';
import { AssessmentCountAggregate } from './assessment-count-aggregate.output';
import { AssessmentAvgAggregate } from './assessment-avg-aggregate.output';
import { AssessmentSumAggregate } from './assessment-sum-aggregate.output';
import { AssessmentMinAggregate } from './assessment-min-aggregate.output';
import { AssessmentMaxAggregate } from './assessment-max-aggregate.output';

@ObjectType()
export class AssessmentGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => AssessmentType, {nullable:false})
    assessmentType!: keyof typeof AssessmentType;

    @Field(() => Date, {nullable:false})
    startTime!: Date | string;

    @Field(() => Date, {nullable:true})
    endTime?: Date | string;

    @Field(() => Boolean, {nullable:false})
    submitAfterEnd!: boolean;

    @Field(() => Int, {nullable:false})
    totalPoints!: number;

    @Field(() => String, {nullable:true})
    classroomId?: string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => String, {nullable:true})
    competitionId?: string;

    @Field(() => AssessmentCountAggregate, {nullable:true})
    _count?: AssessmentCountAggregate;

    @Field(() => AssessmentAvgAggregate, {nullable:true})
    _avg?: AssessmentAvgAggregate;

    @Field(() => AssessmentSumAggregate, {nullable:true})
    _sum?: AssessmentSumAggregate;

    @Field(() => AssessmentMinAggregate, {nullable:true})
    _min?: AssessmentMinAggregate;

    @Field(() => AssessmentMaxAggregate, {nullable:true})
    _max?: AssessmentMaxAggregate;
}
