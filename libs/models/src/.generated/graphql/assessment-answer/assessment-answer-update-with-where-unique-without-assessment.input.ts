import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentAnswerWhereUniqueInput } from './assessment-answer-where-unique.input';
import { AssessmentAnswerUpdateWithoutAssessmentInput } from './assessment-answer-update-without-assessment.input';

@InputType()
export class AssessmentAnswerUpdateWithWhereUniqueWithoutAssessmentInput {

    @Field(() => AssessmentAnswerWhereUniqueInput, {nullable:false})
    where!: AssessmentAnswerWhereUniqueInput;

    @Field(() => AssessmentAnswerUpdateWithoutAssessmentInput, {nullable:false})
    data!: AssessmentAnswerUpdateWithoutAssessmentInput;
}
