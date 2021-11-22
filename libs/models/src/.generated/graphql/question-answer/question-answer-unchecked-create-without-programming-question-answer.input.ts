import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class QuestionAnswerUncheckedCreateWithoutProgrammingQuestionAnswerInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    questionId!: string;

    @Field(() => String, {nullable:true})
    multipleChoiceQuestionAnswerId?: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    assessmentSubmissionId?: string;

    @Field(() => Int, {nullable:false})
    points!: number;

    @Field(() => String, {nullable:true})
    userId?: string;
}
