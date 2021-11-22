import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { QuestionAnswerUncheckedCreateNestedManyWithoutAssessmentSubmissionInput } from '../question-answer/question-answer-unchecked-create-nested-many-without-assessment-submission.input';

@InputType()
export class AssessmentAnswerUncheckedCreateInput {

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    assessmentId!: string;

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

    @Field(() => QuestionAnswerUncheckedCreateNestedManyWithoutAssessmentSubmissionInput, {nullable:true})
    questionsSubmissions?: QuestionAnswerUncheckedCreateNestedManyWithoutAssessmentSubmissionInput;
}
