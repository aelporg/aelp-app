import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssessmentCreateManyInput } from './assessment-create-many.input';

@ArgsType()
export class CreateManyAssessmentArgs {

    @Field(() => [AssessmentCreateManyInput], {nullable:false})
    data!: Array<AssessmentCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
