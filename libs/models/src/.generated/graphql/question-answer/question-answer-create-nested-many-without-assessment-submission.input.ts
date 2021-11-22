import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionAnswerCreateWithoutAssessmentSubmissionInput } from './question-answer-create-without-assessment-submission.input';
import { QuestionAnswerCreateOrConnectWithoutAssessmentSubmissionInput } from './question-answer-create-or-connect-without-assessment-submission.input';
import { QuestionAnswerCreateManyAssessmentSubmissionInputEnvelope } from './question-answer-create-many-assessment-submission-input-envelope.input';
import { QuestionAnswerWhereUniqueInput } from './question-answer-where-unique.input';

@InputType()
export class QuestionAnswerCreateNestedManyWithoutAssessmentSubmissionInput {

    @Field(() => [QuestionAnswerCreateWithoutAssessmentSubmissionInput], {nullable:true})
    create?: Array<QuestionAnswerCreateWithoutAssessmentSubmissionInput>;

    @Field(() => [QuestionAnswerCreateOrConnectWithoutAssessmentSubmissionInput], {nullable:true})
    connectOrCreate?: Array<QuestionAnswerCreateOrConnectWithoutAssessmentSubmissionInput>;

    @Field(() => QuestionAnswerCreateManyAssessmentSubmissionInputEnvelope, {nullable:true})
    createMany?: QuestionAnswerCreateManyAssessmentSubmissionInputEnvelope;

    @Field(() => [QuestionAnswerWhereUniqueInput], {nullable:true})
    connect?: Array<QuestionAnswerWhereUniqueInput>;
}
