import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClassroomMemberUncheckedCreateNestedManyWithoutClassroomInput } from '../classroom-member/classroom-member-unchecked-create-nested-many-without-classroom.input';
import { AssessmentUncheckedCreateNestedManyWithoutClassroomInput } from '../assessment/assessment-unchecked-create-nested-many-without-classroom.input';

@InputType()
export class ClassroomUncheckedCreateWithoutPracticeProgrammingQuestionsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    subject?: string;

    @Field(() => String, {nullable:true})
    section?: string;

    @Field(() => String, {nullable:false})
    inviteCode!: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => ClassroomMemberUncheckedCreateNestedManyWithoutClassroomInput, {nullable:true})
    members?: ClassroomMemberUncheckedCreateNestedManyWithoutClassroomInput;

    @Field(() => AssessmentUncheckedCreateNestedManyWithoutClassroomInput, {nullable:true})
    assessments?: AssessmentUncheckedCreateNestedManyWithoutClassroomInput;
}
