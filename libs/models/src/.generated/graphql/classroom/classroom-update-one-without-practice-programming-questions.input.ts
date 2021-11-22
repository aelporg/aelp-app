import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClassroomCreateWithoutPracticeProgrammingQuestionsInput } from './classroom-create-without-practice-programming-questions.input';
import { ClassroomCreateOrConnectWithoutPracticeProgrammingQuestionsInput } from './classroom-create-or-connect-without-practice-programming-questions.input';
import { ClassroomUpsertWithoutPracticeProgrammingQuestionsInput } from './classroom-upsert-without-practice-programming-questions.input';
import { ClassroomWhereUniqueInput } from './classroom-where-unique.input';
import { ClassroomUpdateWithoutPracticeProgrammingQuestionsInput } from './classroom-update-without-practice-programming-questions.input';

@InputType()
export class ClassroomUpdateOneWithoutPracticeProgrammingQuestionsInput {

    @Field(() => ClassroomCreateWithoutPracticeProgrammingQuestionsInput, {nullable:true})
    create?: ClassroomCreateWithoutPracticeProgrammingQuestionsInput;

    @Field(() => ClassroomCreateOrConnectWithoutPracticeProgrammingQuestionsInput, {nullable:true})
    connectOrCreate?: ClassroomCreateOrConnectWithoutPracticeProgrammingQuestionsInput;

    @Field(() => ClassroomUpsertWithoutPracticeProgrammingQuestionsInput, {nullable:true})
    upsert?: ClassroomUpsertWithoutPracticeProgrammingQuestionsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ClassroomWhereUniqueInput, {nullable:true})
    connect?: ClassroomWhereUniqueInput;

    @Field(() => ClassroomUpdateWithoutPracticeProgrammingQuestionsInput, {nullable:true})
    update?: ClassroomUpdateWithoutPracticeProgrammingQuestionsInput;
}
