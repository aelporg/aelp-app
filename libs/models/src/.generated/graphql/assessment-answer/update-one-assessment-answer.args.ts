import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssessmentAnswerUpdateInput } from './assessment-answer-update.input';
import { AssessmentAnswerWhereUniqueInput } from './assessment-answer-where-unique.input';

@ArgsType()
export class UpdateOneAssessmentAnswerArgs {

    @Field(() => AssessmentAnswerUpdateInput, {nullable:false})
    data!: AssessmentAnswerUpdateInput;

    @Field(() => AssessmentAnswerWhereUniqueInput, {nullable:false})
    where!: AssessmentAnswerWhereUniqueInput;
}
