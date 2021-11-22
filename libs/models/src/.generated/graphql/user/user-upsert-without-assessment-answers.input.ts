import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutAssessmentAnswersInput } from './user-update-without-assessment-answers.input';
import { UserCreateWithoutAssessmentAnswersInput } from './user-create-without-assessment-answers.input';

@InputType()
export class UserUpsertWithoutAssessmentAnswersInput {

    @Field(() => UserUpdateWithoutAssessmentAnswersInput, {nullable:false})
    update!: UserUpdateWithoutAssessmentAnswersInput;

    @Field(() => UserCreateWithoutAssessmentAnswersInput, {nullable:false})
    create!: UserCreateWithoutAssessmentAnswersInput;
}
