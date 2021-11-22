import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionAnswerWhereUniqueInput } from './question-answer-where-unique.input';
import { QuestionAnswerCreateWithoutAssessmentSubmissionInput } from './question-answer-create-without-assessment-submission.input';

@InputType()
export class QuestionAnswerCreateOrConnectWithoutAssessmentSubmissionInput {

    @Field(() => QuestionAnswerWhereUniqueInput, {nullable:false})
    where!: QuestionAnswerWhereUniqueInput;

    @Field(() => QuestionAnswerCreateWithoutAssessmentSubmissionInput, {nullable:false})
    create!: QuestionAnswerCreateWithoutAssessmentSubmissionInput;
}
