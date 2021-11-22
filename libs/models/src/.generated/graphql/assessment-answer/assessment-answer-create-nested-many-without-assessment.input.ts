import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentAnswerCreateWithoutAssessmentInput } from './assessment-answer-create-without-assessment.input';
import { AssessmentAnswerCreateOrConnectWithoutAssessmentInput } from './assessment-answer-create-or-connect-without-assessment.input';
import { AssessmentAnswerCreateManyAssessmentInputEnvelope } from './assessment-answer-create-many-assessment-input-envelope.input';
import { AssessmentAnswerWhereUniqueInput } from './assessment-answer-where-unique.input';

@InputType()
export class AssessmentAnswerCreateNestedManyWithoutAssessmentInput {

    @Field(() => [AssessmentAnswerCreateWithoutAssessmentInput], {nullable:true})
    create?: Array<AssessmentAnswerCreateWithoutAssessmentInput>;

    @Field(() => [AssessmentAnswerCreateOrConnectWithoutAssessmentInput], {nullable:true})
    connectOrCreate?: Array<AssessmentAnswerCreateOrConnectWithoutAssessmentInput>;

    @Field(() => AssessmentAnswerCreateManyAssessmentInputEnvelope, {nullable:true})
    createMany?: AssessmentAnswerCreateManyAssessmentInputEnvelope;

    @Field(() => [AssessmentAnswerWhereUniqueInput], {nullable:true})
    connect?: Array<AssessmentAnswerWhereUniqueInput>;
}
