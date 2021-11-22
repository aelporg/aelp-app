import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssessmentAnswerCreateInput } from './assessment-answer-create.input';

@ArgsType()
export class CreateOneAssessmentAnswerArgs {

    @Field(() => AssessmentAnswerCreateInput, {nullable:false})
    data!: AssessmentAnswerCreateInput;
}
