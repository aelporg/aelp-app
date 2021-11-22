import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAssessmentAnswersInput } from './user-create-without-assessment-answers.input';
import { UserCreateOrConnectWithoutAssessmentAnswersInput } from './user-create-or-connect-without-assessment-answers.input';
import { UserUpsertWithoutAssessmentAnswersInput } from './user-upsert-without-assessment-answers.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutAssessmentAnswersInput } from './user-update-without-assessment-answers.input';

@InputType()
export class UserUpdateOneRequiredWithoutAssessmentAnswersInput {

    @Field(() => UserCreateWithoutAssessmentAnswersInput, {nullable:true})
    create?: UserCreateWithoutAssessmentAnswersInput;

    @Field(() => UserCreateOrConnectWithoutAssessmentAnswersInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutAssessmentAnswersInput;

    @Field(() => UserUpsertWithoutAssessmentAnswersInput, {nullable:true})
    upsert?: UserUpsertWithoutAssessmentAnswersInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutAssessmentAnswersInput, {nullable:true})
    update?: UserUpdateWithoutAssessmentAnswersInput;
}
