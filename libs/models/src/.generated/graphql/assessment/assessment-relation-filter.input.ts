import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentWhereInput } from './assessment-where.input';

@InputType()
export class AssessmentRelationFilter {

    @Field(() => AssessmentWhereInput, {nullable:true})
    is?: AssessmentWhereInput;

    @Field(() => AssessmentWhereInput, {nullable:true})
    isNot?: AssessmentWhereInput;
}
