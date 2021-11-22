import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentAnswerWhereUniqueInput } from './assessment-answer-where-unique.input';
import { AssessmentAnswerCreateWithoutUserInput } from './assessment-answer-create-without-user.input';

@InputType()
export class AssessmentAnswerCreateOrConnectWithoutUserInput {

    @Field(() => AssessmentAnswerWhereUniqueInput, {nullable:false})
    where!: AssessmentAnswerWhereUniqueInput;

    @Field(() => AssessmentAnswerCreateWithoutUserInput, {nullable:false})
    create!: AssessmentAnswerCreateWithoutUserInput;
}
