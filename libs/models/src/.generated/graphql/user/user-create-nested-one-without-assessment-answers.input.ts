import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAssessmentAnswersInput } from './user-create-without-assessment-answers.input';
import { UserCreateOrConnectWithoutAssessmentAnswersInput } from './user-create-or-connect-without-assessment-answers.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutAssessmentAnswersInput {

    @Field(() => UserCreateWithoutAssessmentAnswersInput, {nullable:true})
    create?: UserCreateWithoutAssessmentAnswersInput;

    @Field(() => UserCreateOrConnectWithoutAssessmentAnswersInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutAssessmentAnswersInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
