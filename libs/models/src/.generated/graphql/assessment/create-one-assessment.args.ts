import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssessmentCreateInput } from './assessment-create.input';

@ArgsType()
export class CreateOneAssessmentArgs {

    @Field(() => AssessmentCreateInput, {nullable:false})
    data!: AssessmentCreateInput;
}
