import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssessmentWhereUniqueInput } from './assessment-where-unique.input';
import { AssessmentCreateInput } from './assessment-create.input';
import { AssessmentUpdateInput } from './assessment-update.input';

@ArgsType()
export class UpsertOneAssessmentArgs {

    @Field(() => AssessmentWhereUniqueInput, {nullable:false})
    where!: AssessmentWhereUniqueInput;

    @Field(() => AssessmentCreateInput, {nullable:false})
    create!: AssessmentCreateInput;

    @Field(() => AssessmentUpdateInput, {nullable:false})
    update!: AssessmentUpdateInput;
}
