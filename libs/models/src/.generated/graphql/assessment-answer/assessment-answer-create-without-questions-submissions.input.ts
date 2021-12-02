import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutAssessmentAnswersInput } from '../user/user-create-nested-one-without-assessment-answers.input';
import { AssessmentCreateNestedOneWithoutAnswersInput } from '../assessment/assessment-create-nested-one-without-answers.input';

@InputType()
export class AssessmentAnswerCreateWithoutQuestionsSubmissionsInput {

    @Field(() => Boolean, {nullable:true})
    reviewed?: boolean;

    @Field(() => Date, {nullable:true})
    submittedAt?: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Int, {nullable:false})
    recPoints!: number;

    @Field(() => UserCreateNestedOneWithoutAssessmentAnswersInput, {nullable:false})
    user!: UserCreateNestedOneWithoutAssessmentAnswersInput;

    @Field(() => AssessmentCreateNestedOneWithoutAnswersInput, {nullable:false})
    assessment!: AssessmentCreateNestedOneWithoutAnswersInput;
}