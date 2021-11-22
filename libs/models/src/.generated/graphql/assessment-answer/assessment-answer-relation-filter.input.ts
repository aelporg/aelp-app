import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentAnswerWhereInput } from './assessment-answer-where.input';

@InputType()
export class AssessmentAnswerRelationFilter {

    @Field(() => AssessmentAnswerWhereInput, {nullable:true})
    is?: AssessmentAnswerWhereInput;

    @Field(() => AssessmentAnswerWhereInput, {nullable:true})
    isNot?: AssessmentAnswerWhereInput;
}
