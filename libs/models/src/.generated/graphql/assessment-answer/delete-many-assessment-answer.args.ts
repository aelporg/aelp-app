import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssessmentAnswerWhereInput } from './assessment-answer-where.input';

@ArgsType()
export class DeleteManyAssessmentAnswerArgs {

    @Field(() => AssessmentAnswerWhereInput, {nullable:true})
    where?: AssessmentAnswerWhereInput;
}
