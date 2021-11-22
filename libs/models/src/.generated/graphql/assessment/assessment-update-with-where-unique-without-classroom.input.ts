import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentWhereUniqueInput } from './assessment-where-unique.input';
import { AssessmentUpdateWithoutClassroomInput } from './assessment-update-without-classroom.input';

@InputType()
export class AssessmentUpdateWithWhereUniqueWithoutClassroomInput {

    @Field(() => AssessmentWhereUniqueInput, {nullable:false})
    where!: AssessmentWhereUniqueInput;

    @Field(() => AssessmentUpdateWithoutClassroomInput, {nullable:false})
    data!: AssessmentUpdateWithoutClassroomInput;
}
