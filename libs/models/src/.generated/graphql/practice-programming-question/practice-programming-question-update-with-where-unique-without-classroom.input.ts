import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PracticeProgrammingQuestionWhereUniqueInput } from './practice-programming-question-where-unique.input';
import { PracticeProgrammingQuestionUpdateWithoutClassroomInput } from './practice-programming-question-update-without-classroom.input';

@InputType()
export class PracticeProgrammingQuestionUpdateWithWhereUniqueWithoutClassroomInput {

    @Field(() => PracticeProgrammingQuestionWhereUniqueInput, {nullable:false})
    where!: PracticeProgrammingQuestionWhereUniqueInput;

    @Field(() => PracticeProgrammingQuestionUpdateWithoutClassroomInput, {nullable:false})
    data!: PracticeProgrammingQuestionUpdateWithoutClassroomInput;
}
