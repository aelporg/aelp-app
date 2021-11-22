import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssessmentWhereInput } from './assessment-where.input';
import { AssessmentOrderByWithRelationInput } from './assessment-order-by-with-relation.input';
import { AssessmentWhereUniqueInput } from './assessment-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AssessmentScalarFieldEnum } from './assessment-scalar-field.enum';

@ArgsType()
export class FindManyAssessmentArgs {

    @Field(() => AssessmentWhereInput, {nullable:true})
    where?: AssessmentWhereInput;

    @Field(() => [AssessmentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AssessmentOrderByWithRelationInput>;

    @Field(() => AssessmentWhereUniqueInput, {nullable:true})
    cursor?: AssessmentWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AssessmentScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AssessmentScalarFieldEnum>;
}
