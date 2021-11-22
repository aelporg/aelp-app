import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentAnswerCreateManyUserInput } from './assessment-answer-create-many-user.input';

@InputType()
export class AssessmentAnswerCreateManyUserInputEnvelope {

    @Field(() => [AssessmentAnswerCreateManyUserInput], {nullable:false})
    data!: Array<AssessmentAnswerCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
