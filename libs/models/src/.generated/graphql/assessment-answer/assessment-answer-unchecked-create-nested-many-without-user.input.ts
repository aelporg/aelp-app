import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentAnswerCreateWithoutUserInput } from './assessment-answer-create-without-user.input';
import { AssessmentAnswerCreateOrConnectWithoutUserInput } from './assessment-answer-create-or-connect-without-user.input';
import { AssessmentAnswerCreateManyUserInputEnvelope } from './assessment-answer-create-many-user-input-envelope.input';
import { AssessmentAnswerWhereUniqueInput } from './assessment-answer-where-unique.input';

@InputType()
export class AssessmentAnswerUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [AssessmentAnswerCreateWithoutUserInput], {nullable:true})
    create?: Array<AssessmentAnswerCreateWithoutUserInput>;

    @Field(() => [AssessmentAnswerCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<AssessmentAnswerCreateOrConnectWithoutUserInput>;

    @Field(() => AssessmentAnswerCreateManyUserInputEnvelope, {nullable:true})
    createMany?: AssessmentAnswerCreateManyUserInputEnvelope;

    @Field(() => [AssessmentAnswerWhereUniqueInput], {nullable:true})
    connect?: Array<AssessmentAnswerWhereUniqueInput>;
}
