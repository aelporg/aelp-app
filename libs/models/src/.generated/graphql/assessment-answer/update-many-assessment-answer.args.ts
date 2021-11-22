import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssessmentAnswerUpdateManyMutationInput } from './assessment-answer-update-many-mutation.input';
import { AssessmentAnswerWhereInput } from './assessment-answer-where.input';

@ArgsType()
export class UpdateManyAssessmentAnswerArgs {

    @Field(() => AssessmentAnswerUpdateManyMutationInput, {nullable:false})
    data!: AssessmentAnswerUpdateManyMutationInput;

    @Field(() => AssessmentAnswerWhereInput, {nullable:true})
    where?: AssessmentAnswerWhereInput;
}
