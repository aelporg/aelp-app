import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClassroomCreateWithoutPracticeProgrammingQuestionsInput } from './classroom-create-without-practice-programming-questions.input';
import { ClassroomCreateOrConnectWithoutPracticeProgrammingQuestionsInput } from './classroom-create-or-connect-without-practice-programming-questions.input';
import { ClassroomWhereUniqueInput } from './classroom-where-unique.input';

@InputType()
export class ClassroomCreateNestedOneWithoutPracticeProgrammingQuestionsInput {

    @Field(() => ClassroomCreateWithoutPracticeProgrammingQuestionsInput, {nullable:true})
    create?: ClassroomCreateWithoutPracticeProgrammingQuestionsInput;

    @Field(() => ClassroomCreateOrConnectWithoutPracticeProgrammingQuestionsInput, {nullable:true})
    connectOrCreate?: ClassroomCreateOrConnectWithoutPracticeProgrammingQuestionsInput;

    @Field(() => ClassroomWhereUniqueInput, {nullable:true})
    connect?: ClassroomWhereUniqueInput;
}
