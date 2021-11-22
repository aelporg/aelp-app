import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssessmentWhereInput } from './assessment-where.input';

@ArgsType()
export class DeleteManyAssessmentArgs {

    @Field(() => AssessmentWhereInput, {nullable:true})
    where?: AssessmentWhereInput;
}
