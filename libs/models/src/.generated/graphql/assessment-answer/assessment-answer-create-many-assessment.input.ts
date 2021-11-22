import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class AssessmentAnswerCreateManyAssessmentInput {

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Boolean, {nullable:true})
    reviewed?: boolean;

    @Field(() => Date, {nullable:true})
    submittedAt?: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Int, {nullable:false})
    recPoints!: number;
}
