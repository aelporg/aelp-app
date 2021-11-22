import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentAnswerWhereUniqueInput } from './assessment-answer-where-unique.input';
import { AssessmentAnswerUpdateWithoutUserInput } from './assessment-answer-update-without-user.input';

@InputType()
export class AssessmentAnswerUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => AssessmentAnswerWhereUniqueInput, {nullable:false})
    where!: AssessmentAnswerWhereUniqueInput;

    @Field(() => AssessmentAnswerUpdateWithoutUserInput, {nullable:false})
    data!: AssessmentAnswerUpdateWithoutUserInput;
}
