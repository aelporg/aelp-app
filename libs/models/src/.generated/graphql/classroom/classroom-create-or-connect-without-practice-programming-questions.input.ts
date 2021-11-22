import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClassroomWhereUniqueInput } from './classroom-where-unique.input';
import { ClassroomCreateWithoutPracticeProgrammingQuestionsInput } from './classroom-create-without-practice-programming-questions.input';

@InputType()
export class ClassroomCreateOrConnectWithoutPracticeProgrammingQuestionsInput {

    @Field(() => ClassroomWhereUniqueInput, {nullable:false})
    where!: ClassroomWhereUniqueInput;

    @Field(() => ClassroomCreateWithoutPracticeProgrammingQuestionsInput, {nullable:false})
    create!: ClassroomCreateWithoutPracticeProgrammingQuestionsInput;
}
