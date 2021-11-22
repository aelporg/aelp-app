import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClassroomMemberCreateNestedManyWithoutClassroomInput } from '../classroom-member/classroom-member-create-nested-many-without-classroom.input';
import { PracticeProgrammingQuestionCreateNestedManyWithoutClassroomInput } from '../practice-programming-question/practice-programming-question-create-nested-many-without-classroom.input';

@InputType()
export class ClassroomCreateWithoutAssessmentsInput {

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

    @Field(() => ClassroomMemberCreateNestedManyWithoutClassroomInput, {nullable:true})
    members?: ClassroomMemberCreateNestedManyWithoutClassroomInput;

    @Field(() => PracticeProgrammingQuestionCreateNestedManyWithoutClassroomInput, {nullable:true})
    practiceProgrammingQuestions?: PracticeProgrammingQuestionCreateNestedManyWithoutClassroomInput;
}
