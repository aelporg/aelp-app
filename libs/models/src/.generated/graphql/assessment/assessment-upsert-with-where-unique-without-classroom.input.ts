import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentWhereUniqueInput } from './assessment-where-unique.input';
import { AssessmentUpdateWithoutClassroomInput } from './assessment-update-without-classroom.input';
import { AssessmentCreateWithoutClassroomInput } from './assessment-create-without-classroom.input';

@InputType()
export class AssessmentUpsertWithWhereUniqueWithoutClassroomInput {

    @Field(() => AssessmentWhereUniqueInput, {nullable:false})
    where!: AssessmentWhereUniqueInput;

    @Field(() => AssessmentUpdateWithoutClassroomInput, {nullable:false})
    update!: AssessmentUpdateWithoutClassroomInput;

    @Field(() => AssessmentCreateWithoutClassroomInput, {nullable:false})
    create!: AssessmentCreateWithoutClassroomInput;
}
