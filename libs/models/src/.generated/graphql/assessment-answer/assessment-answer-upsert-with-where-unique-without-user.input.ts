import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentAnswerWhereUniqueInput } from './assessment-answer-where-unique.input';
import { AssessmentAnswerUpdateWithoutUserInput } from './assessment-answer-update-without-user.input';
import { AssessmentAnswerCreateWithoutUserInput } from './assessment-answer-create-without-user.input';

@InputType()
export class AssessmentAnswerUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => AssessmentAnswerWhereUniqueInput, {nullable:false})
    where!: AssessmentAnswerWhereUniqueInput;

    @Field(() => AssessmentAnswerUpdateWithoutUserInput, {nullable:false})
    update!: AssessmentAnswerUpdateWithoutUserInput;

    @Field(() => AssessmentAnswerCreateWithoutUserInput, {nullable:false})
    create!: AssessmentAnswerCreateWithoutUserInput;
}
