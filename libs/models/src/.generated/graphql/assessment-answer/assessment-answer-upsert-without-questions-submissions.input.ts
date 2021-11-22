import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentAnswerUpdateWithoutQuestionsSubmissionsInput } from './assessment-answer-update-without-questions-submissions.input';
import { AssessmentAnswerCreateWithoutQuestionsSubmissionsInput } from './assessment-answer-create-without-questions-submissions.input';

@InputType()
export class AssessmentAnswerUpsertWithoutQuestionsSubmissionsInput {

    @Field(() => AssessmentAnswerUpdateWithoutQuestionsSubmissionsInput, {nullable:false})
    update!: AssessmentAnswerUpdateWithoutQuestionsSubmissionsInput;

    @Field(() => AssessmentAnswerCreateWithoutQuestionsSubmissionsInput, {nullable:false})
    create!: AssessmentAnswerCreateWithoutQuestionsSubmissionsInput;
}
