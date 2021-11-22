import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionAnswerCreateManyAssessmentSubmissionInput } from './question-answer-create-many-assessment-submission.input';

@InputType()
export class QuestionAnswerCreateManyAssessmentSubmissionInputEnvelope {

    @Field(() => [QuestionAnswerCreateManyAssessmentSubmissionInput], {nullable:false})
    data!: Array<QuestionAnswerCreateManyAssessmentSubmissionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
