import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentAnswerAssessmentIdUserIdCompoundUniqueInput } from './assessment-answer-assessment-id-user-id-compound-unique.input';

@InputType()
export class AssessmentAnswerWhereUniqueInput {

    @Field(() => AssessmentAnswerAssessmentIdUserIdCompoundUniqueInput, {nullable:true})
    assessmentId_userId?: AssessmentAnswerAssessmentIdUserIdCompoundUniqueInput;
}
