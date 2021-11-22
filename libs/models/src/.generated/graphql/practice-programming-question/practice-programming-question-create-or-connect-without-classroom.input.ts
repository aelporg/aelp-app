import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PracticeProgrammingQuestionWhereUniqueInput } from './practice-programming-question-where-unique.input';
import { PracticeProgrammingQuestionCreateWithoutClassroomInput } from './practice-programming-question-create-without-classroom.input';

@InputType()
export class PracticeProgrammingQuestionCreateOrConnectWithoutClassroomInput {

    @Field(() => PracticeProgrammingQuestionWhereUniqueInput, {nullable:false})
    where!: PracticeProgrammingQuestionWhereUniqueInput;

    @Field(() => PracticeProgrammingQuestionCreateWithoutClassroomInput, {nullable:false})
    create!: PracticeProgrammingQuestionCreateWithoutClassroomInput;
}
