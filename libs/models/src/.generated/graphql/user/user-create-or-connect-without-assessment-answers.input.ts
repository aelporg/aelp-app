import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutAssessmentAnswersInput } from './user-create-without-assessment-answers.input';

@InputType()
export class UserCreateOrConnectWithoutAssessmentAnswersInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutAssessmentAnswersInput, {nullable:false})
    create!: UserCreateWithoutAssessmentAnswersInput;
}
