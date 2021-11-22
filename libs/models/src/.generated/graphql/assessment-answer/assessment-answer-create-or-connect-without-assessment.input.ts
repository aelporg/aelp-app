import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentAnswerWhereUniqueInput } from './assessment-answer-where-unique.input';
import { AssessmentAnswerCreateWithoutAssessmentInput } from './assessment-answer-create-without-assessment.input';

@InputType()
export class AssessmentAnswerCreateOrConnectWithoutAssessmentInput {

    @Field(() => AssessmentAnswerWhereUniqueInput, {nullable:false})
    where!: AssessmentAnswerWhereUniqueInput;

    @Field(() => AssessmentAnswerCreateWithoutAssessmentInput, {nullable:false})
    create!: AssessmentAnswerCreateWithoutAssessmentInput;
}
