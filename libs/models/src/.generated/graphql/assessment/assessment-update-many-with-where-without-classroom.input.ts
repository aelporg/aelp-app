import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentScalarWhereInput } from './assessment-scalar-where.input';
import { AssessmentUpdateManyMutationInput } from './assessment-update-many-mutation.input';

@InputType()
export class AssessmentUpdateManyWithWhereWithoutClassroomInput {

    @Field(() => AssessmentScalarWhereInput, {nullable:false})
    where!: AssessmentScalarWhereInput;

    @Field(() => AssessmentUpdateManyMutationInput, {nullable:false})
    data!: AssessmentUpdateManyMutationInput;
}
