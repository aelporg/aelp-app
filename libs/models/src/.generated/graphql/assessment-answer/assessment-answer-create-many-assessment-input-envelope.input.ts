import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentAnswerCreateManyAssessmentInput } from './assessment-answer-create-many-assessment.input';

@InputType()
export class AssessmentAnswerCreateManyAssessmentInputEnvelope {

    @Field(() => [AssessmentAnswerCreateManyAssessmentInput], {nullable:false})
    data!: Array<AssessmentAnswerCreateManyAssessmentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
