import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssessmentUpdateManyMutationInput } from './assessment-update-many-mutation.input';
import { AssessmentWhereInput } from './assessment-where.input';

@ArgsType()
export class UpdateManyAssessmentArgs {

    @Field(() => AssessmentUpdateManyMutationInput, {nullable:false})
    data!: AssessmentUpdateManyMutationInput;

    @Field(() => AssessmentWhereInput, {nullable:true})
    where?: AssessmentWhereInput;
}
