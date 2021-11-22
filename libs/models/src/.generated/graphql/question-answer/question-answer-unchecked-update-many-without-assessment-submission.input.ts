import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionAnswerCreateWithoutAssessmentSubmissionInput } from './question-answer-create-without-assessment-submission.input';
import { QuestionAnswerCreateOrConnectWithoutAssessmentSubmissionInput } from './question-answer-create-or-connect-without-assessment-submission.input';
import { QuestionAnswerUpsertWithWhereUniqueWithoutAssessmentSubmissionInput } from './question-answer-upsert-with-where-unique-without-assessment-submission.input';
import { QuestionAnswerCreateManyAssessmentSubmissionInputEnvelope } from './question-answer-create-many-assessment-submission-input-envelope.input';
import { QuestionAnswerWhereUniqueInput } from './question-answer-where-unique.input';
import { QuestionAnswerUpdateWithWhereUniqueWithoutAssessmentSubmissionInput } from './question-answer-update-with-where-unique-without-assessment-submission.input';
import { QuestionAnswerUpdateManyWithWhereWithoutAssessmentSubmissionInput } from './question-answer-update-many-with-where-without-assessment-submission.input';
import { QuestionAnswerScalarWhereInput } from './question-answer-scalar-where.input';

@InputType()
export class QuestionAnswerUncheckedUpdateManyWithoutAssessmentSubmissionInput {

    @Field(() => [QuestionAnswerCreateWithoutAssessmentSubmissionInput], {nullable:true})
    create?: Array<QuestionAnswerCreateWithoutAssessmentSubmissionInput>;

    @Field(() => [QuestionAnswerCreateOrConnectWithoutAssessmentSubmissionInput], {nullable:true})
    connectOrCreate?: Array<QuestionAnswerCreateOrConnectWithoutAssessmentSubmissionInput>;

    @Field(() => [QuestionAnswerUpsertWithWhereUniqueWithoutAssessmentSubmissionInput], {nullable:true})
    upsert?: Array<QuestionAnswerUpsertWithWhereUniqueWithoutAssessmentSubmissionInput>;

    @Field(() => QuestionAnswerCreateManyAssessmentSubmissionInputEnvelope, {nullable:true})
    createMany?: QuestionAnswerCreateManyAssessmentSubmissionInputEnvelope;

    @Field(() => [QuestionAnswerWhereUniqueInput], {nullable:true})
    set?: Array<QuestionAnswerWhereUniqueInput>;

    @Field(() => [QuestionAnswerWhereUniqueInput], {nullable:true})
    disconnect?: Array<QuestionAnswerWhereUniqueInput>;

    @Field(() => [QuestionAnswerWhereUniqueInput], {nullable:true})
    delete?: Array<QuestionAnswerWhereUniqueInput>;

    @Field(() => [QuestionAnswerWhereUniqueInput], {nullable:true})
    connect?: Array<QuestionAnswerWhereUniqueInput>;

    @Field(() => [QuestionAnswerUpdateWithWhereUniqueWithoutAssessmentSubmissionInput], {nullable:true})
    update?: Array<QuestionAnswerUpdateWithWhereUniqueWithoutAssessmentSubmissionInput>;

    @Field(() => [QuestionAnswerUpdateManyWithWhereWithoutAssessmentSubmissionInput], {nullable:true})
    updateMany?: Array<QuestionAnswerUpdateManyWithWhereWithoutAssessmentSubmissionInput>;

    @Field(() => [QuestionAnswerScalarWhereInput], {nullable:true})
    deleteMany?: Array<QuestionAnswerScalarWhereInput>;
}
