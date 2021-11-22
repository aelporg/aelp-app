import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AssessmentCreateNestedOneWithoutAnswersInput } from '../assessment/assessment-create-nested-one-without-answers.input';
import { QuestionAnswerCreateNestedManyWithoutAssessmentSubmissionInput } from '../question-answer/question-answer-create-nested-many-without-assessment-submission.input';

@InputType()
export class AssessmentAnswerCreateWithoutUserInput {

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

    @Field(() => AssessmentCreateNestedOneWithoutAnswersInput, {nullable:false})
    assessment!: AssessmentCreateNestedOneWithoutAnswersInput;

    @Field(() => QuestionAnswerCreateNestedManyWithoutAssessmentSubmissionInput, {nullable:true})
    questionsSubmissions?: QuestionAnswerCreateNestedManyWithoutAssessmentSubmissionInput;
}
