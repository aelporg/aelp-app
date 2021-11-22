import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentWhereInput } from './assessment-where.input';

@InputType()
export class AssessmentListRelationFilter {

    @Field(() => AssessmentWhereInput, {nullable:true})
    every?: AssessmentWhereInput;

    @Field(() => AssessmentWhereInput, {nullable:true})
    some?: AssessmentWhereInput;

    @Field(() => AssessmentWhereInput, {nullable:true})
    none?: AssessmentWhereInput;
}
