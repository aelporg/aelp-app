import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssessmentUpdateInput } from './assessment-update.input';
import { AssessmentWhereUniqueInput } from './assessment-where-unique.input';

@ArgsType()
export class UpdateOneAssessmentArgs {

    @Field(() => AssessmentUpdateInput, {nullable:false})
    data!: AssessmentUpdateInput;

    @Field(() => AssessmentWhereUniqueInput, {nullable:false})
    where!: AssessmentWhereUniqueInput;
}
