import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentWhereUniqueInput } from './assessment-where-unique.input';
import { AssessmentCreateWithoutClassroomInput } from './assessment-create-without-classroom.input';

@InputType()
export class AssessmentCreateOrConnectWithoutClassroomInput {

    @Field(() => AssessmentWhereUniqueInput, {nullable:false})
    where!: AssessmentWhereUniqueInput;

    @Field(() => AssessmentCreateWithoutClassroomInput, {nullable:false})
    create!: AssessmentCreateWithoutClassroomInput;
}
