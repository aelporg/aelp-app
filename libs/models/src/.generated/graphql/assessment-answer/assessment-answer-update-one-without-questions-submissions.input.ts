import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentAnswerCreateWithoutQuestionsSubmissionsInput } from './assessment-answer-create-without-questions-submissions.input';
import { AssessmentAnswerCreateOrConnectWithoutQuestionsSubmissionsInput } from './assessment-answer-create-or-connect-without-questions-submissions.input';
import { AssessmentAnswerUpsertWithoutQuestionsSubmissionsInput } from './assessment-answer-upsert-without-questions-submissions.input';
import { AssessmentAnswerWhereUniqueInput } from './assessment-answer-where-unique.input';
import { AssessmentAnswerUpdateWithoutQuestionsSubmissionsInput } from './assessment-answer-update-without-questions-submissions.input';

@InputType()
export class AssessmentAnswerUpdateOneWithoutQuestionsSubmissionsInput {

    @Field(() => AssessmentAnswerCreateWithoutQuestionsSubmissionsInput, {nullable:true})
    create?: AssessmentAnswerCreateWithoutQuestionsSubmissionsInput;

    @Field(() => AssessmentAnswerCreateOrConnectWithoutQuestionsSubmissionsInput, {nullable:true})
    connectOrCreate?: AssessmentAnswerCreateOrConnectWithoutQuestionsSubmissionsInput;

    @Field(() => AssessmentAnswerUpsertWithoutQuestionsSubmissionsInput, {nullable:true})
    upsert?: AssessmentAnswerUpsertWithoutQuestionsSubmissionsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => AssessmentAnswerWhereUniqueInput, {nullable:true})
    connect?: AssessmentAnswerWhereUniqueInput;

    @Field(() => AssessmentAnswerUpdateWithoutQuestionsSubmissionsInput, {nullable:true})
    update?: AssessmentAnswerUpdateWithoutQuestionsSubmissionsInput;
}
