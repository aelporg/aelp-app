import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PracticeProgrammingQuestionWhereUniqueInput } from './practice-programming-question-where-unique.input';
import { PracticeProgrammingQuestionUpdateWithoutClassroomInput } from './practice-programming-question-update-without-classroom.input';
import { PracticeProgrammingQuestionCreateWithoutClassroomInput } from './practice-programming-question-create-without-classroom.input';

@InputType()
export class PracticeProgrammingQuestionUpsertWithWhereUniqueWithoutClassroomInput {

    @Field(() => PracticeProgrammingQuestionWhereUniqueInput, {nullable:false})
    where!: PracticeProgrammingQuestionWhereUniqueInput;

    @Field(() => PracticeProgrammingQuestionUpdateWithoutClassroomInput, {nullable:false})
    update!: PracticeProgrammingQuestionUpdateWithoutClassroomInput;

    @Field(() => PracticeProgrammingQuestionCreateWithoutClassroomInput, {nullable:false})
    create!: PracticeProgrammingQuestionCreateWithoutClassroomInput;
}
