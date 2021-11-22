import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentAnswerWhereUniqueInput } from './assessment-answer-where-unique.input';
import { AssessmentAnswerCreateWithoutQuestionsSubmissionsInput } from './assessment-answer-create-without-questions-submissions.input';

@InputType()
export class AssessmentAnswerCreateOrConnectWithoutQuestionsSubmissionsInput {

    @Field(() => AssessmentAnswerWhereUniqueInput, {nullable:false})
    where!: AssessmentAnswerWhereUniqueInput;

    @Field(() => AssessmentAnswerCreateWithoutQuestionsSubmissionsInput, {nullable:false})
    create!: AssessmentAnswerCreateWithoutQuestionsSubmissionsInput;
}
