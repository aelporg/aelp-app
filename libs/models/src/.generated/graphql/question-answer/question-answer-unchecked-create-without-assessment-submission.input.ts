import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class QuestionAnswerUncheckedCreateWithoutAssessmentSubmissionInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    questionId!: string;

    @Field(() => String, {nullable:true})
    multipleChoiceQuestionAnswerId?: string;

    @Field(() => String, {nullable:true})
    programmingQuestionAnswerId?: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Int, {nullable:false})
    points!: number;
}
