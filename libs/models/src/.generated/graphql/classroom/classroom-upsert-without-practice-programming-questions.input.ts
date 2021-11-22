import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClassroomUpdateWithoutPracticeProgrammingQuestionsInput } from './classroom-update-without-practice-programming-questions.input';
import { ClassroomCreateWithoutPracticeProgrammingQuestionsInput } from './classroom-create-without-practice-programming-questions.input';

@InputType()
export class ClassroomUpsertWithoutPracticeProgrammingQuestionsInput {

    @Field(() => ClassroomUpdateWithoutPracticeProgrammingQuestionsInput, {nullable:false})
    update!: ClassroomUpdateWithoutPracticeProgrammingQuestionsInput;

    @Field(() => ClassroomCreateWithoutPracticeProgrammingQuestionsInput, {nullable:false})
    create!: ClassroomCreateWithoutPracticeProgrammingQuestionsInput;
}
