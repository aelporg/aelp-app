import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionAnswerWhereUniqueInput } from './question-answer-where-unique.input';
import { QuestionAnswerUpdateWithoutAssessmentSubmissionInput } from './question-answer-update-without-assessment-submission.input';

@InputType()
export class QuestionAnswerUpdateWithWhereUniqueWithoutAssessmentSubmissionInput {

    @Field(() => QuestionAnswerWhereUniqueInput, {nullable:false})
    where!: QuestionAnswerWhereUniqueInput;

    @Field(() => QuestionAnswerUpdateWithoutAssessmentSubmissionInput, {nullable:false})
    data!: QuestionAnswerUpdateWithoutAssessmentSubmissionInput;
}
