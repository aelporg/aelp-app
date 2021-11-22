import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentAnswerWhereInput } from './assessment-answer-where.input';

@InputType()
export class AssessmentAnswerListRelationFilter {

    @Field(() => AssessmentAnswerWhereInput, {nullable:true})
    every?: AssessmentAnswerWhereInput;

    @Field(() => AssessmentAnswerWhereInput, {nullable:true})
    some?: AssessmentAnswerWhereInput;

    @Field(() => AssessmentAnswerWhereInput, {nullable:true})
    none?: AssessmentAnswerWhereInput;
}
