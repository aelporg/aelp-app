import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentAnswerWhereUniqueInput } from './assessment-answer-where-unique.input';
import { AssessmentAnswerUpdateWithoutAssessmentInput } from './assessment-answer-update-without-assessment.input';
import { AssessmentAnswerCreateWithoutAssessmentInput } from './assessment-answer-create-without-assessment.input';

@InputType()
export class AssessmentAnswerUpsertWithWhereUniqueWithoutAssessmentInput {

    @Field(() => AssessmentAnswerWhereUniqueInput, {nullable:false})
    where!: AssessmentAnswerWhereUniqueInput;

    @Field(() => AssessmentAnswerUpdateWithoutAssessmentInput, {nullable:false})
    update!: AssessmentAnswerUpdateWithoutAssessmentInput;

    @Field(() => AssessmentAnswerCreateWithoutAssessmentInput, {nullable:false})
    create!: AssessmentAnswerCreateWithoutAssessmentInput;
}
