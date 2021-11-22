import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AssessmentCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    assessmentType?: true;

    @Field(() => Boolean, {nullable:true})
    startTime?: true;

    @Field(() => Boolean, {nullable:true})
    endTime?: true;

    @Field(() => Boolean, {nullable:true})
    submitAfterEnd?: true;

    @Field(() => Boolean, {nullable:true})
    totalPoints?: true;

    @Field(() => Boolean, {nullable:true})
    classroomId?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    competitionId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
