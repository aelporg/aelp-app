import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentAnswerCreateWithoutQuestionsSubmissionsInput } from './assessment-answer-create-without-questions-submissions.input';
import { AssessmentAnswerCreateOrConnectWithoutQuestionsSubmissionsInput } from './assessment-answer-create-or-connect-without-questions-submissions.input';
import { AssessmentAnswerWhereUniqueInput } from './assessment-answer-where-unique.input';

@InputType()
export class AssessmentAnswerCreateNestedOneWithoutQuestionsSubmissionsInput {

    @Field(() => AssessmentAnswerCreateWithoutQuestionsSubmissionsInput, {nullable:true})
    create?: AssessmentAnswerCreateWithoutQuestionsSubmissionsInput;

    @Field(() => AssessmentAnswerCreateOrConnectWithoutQuestionsSubmissionsInput, {nullable:true})
    connectOrCreate?: AssessmentAnswerCreateOrConnectWithoutQuestionsSubmissionsInput;

    @Field(() => AssessmentAnswerWhereUniqueInput, {nullable:true})
    connect?: AssessmentAnswerWhereUniqueInput;
}
