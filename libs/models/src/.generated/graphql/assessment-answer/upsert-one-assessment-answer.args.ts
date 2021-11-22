import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssessmentAnswerWhereUniqueInput } from './assessment-answer-where-unique.input';
import { AssessmentAnswerCreateInput } from './assessment-answer-create.input';
import { AssessmentAnswerUpdateInput } from './assessment-answer-update.input';

@ArgsType()
export class UpsertOneAssessmentAnswerArgs {

    @Field(() => AssessmentAnswerWhereUniqueInput, {nullable:false})
    where!: AssessmentAnswerWhereUniqueInput;

    @Field(() => AssessmentAnswerCreateInput, {nullable:false})
    create!: AssessmentAnswerCreateInput;

    @Field(() => AssessmentAnswerUpdateInput, {nullable:false})
    update!: AssessmentAnswerUpdateInput;
}
