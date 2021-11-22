import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionAnswerWhereUniqueInput } from './question-answer-where-unique.input';
import { QuestionAnswerUpdateWithoutAssessmentSubmissionInput } from './question-answer-update-without-assessment-submission.input';
import { QuestionAnswerCreateWithoutAssessmentSubmissionInput } from './question-answer-create-without-assessment-submission.input';

@InputType()
export class QuestionAnswerUpsertWithWhereUniqueWithoutAssessmentSubmissionInput {

    @Field(() => QuestionAnswerWhereUniqueInput, {nullable:false})
    where!: QuestionAnswerWhereUniqueInput;

    @Field(() => QuestionAnswerUpdateWithoutAssessmentSubmissionInput, {nullable:false})
    update!: QuestionAnswerUpdateWithoutAssessmentSubmissionInput;

    @Field(() => QuestionAnswerCreateWithoutAssessmentSubmissionInput, {nullable:false})
    create!: QuestionAnswerCreateWithoutAssessmentSubmissionInput;
}
