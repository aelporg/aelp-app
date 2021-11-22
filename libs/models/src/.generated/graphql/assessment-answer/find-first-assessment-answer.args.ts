import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssessmentAnswerWhereInput } from './assessment-answer-where.input';
import { AssessmentAnswerOrderByWithRelationInput } from './assessment-answer-order-by-with-relation.input';
import { AssessmentAnswerWhereUniqueInput } from './assessment-answer-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AssessmentAnswerScalarFieldEnum } from './assessment-answer-scalar-field.enum';

@ArgsType()
export class FindFirstAssessmentAnswerArgs {

    @Field(() => AssessmentAnswerWhereInput, {nullable:true})
    where?: AssessmentAnswerWhereInput;

    @Field(() => [AssessmentAnswerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AssessmentAnswerOrderByWithRelationInput>;

    @Field(() => AssessmentAnswerWhereUniqueInput, {nullable:true})
    cursor?: AssessmentAnswerWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AssessmentAnswerScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AssessmentAnswerScalarFieldEnum>;
}
