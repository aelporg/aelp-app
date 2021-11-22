import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentUncheckedCreateNestedManyWithoutClassroomInput } from '../assessment/assessment-unchecked-create-nested-many-without-classroom.input';
import { PracticeProgrammingQuestionUncheckedCreateNestedManyWithoutClassroomInput } from '../practice-programming-question/practice-programming-question-unchecked-create-nested-many-without-classroom.input';

@InputType()
export class ClassroomUncheckedCreateWithoutMembersInput {

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

    @Field(() => AssessmentUncheckedCreateNestedManyWithoutClassroomInput, {nullable:true})
    assessments?: AssessmentUncheckedCreateNestedManyWithoutClassroomInput;

    @Field(() => PracticeProgrammingQuestionUncheckedCreateNestedManyWithoutClassroomInput, {nullable:true})
    practiceProgrammingQuestions?: PracticeProgrammingQuestionUncheckedCreateNestedManyWithoutClassroomInput;
}
