import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionCreateWithoutPracticeInput } from './programming-question-create-without-practice.input';
import { ProgrammingQuestionCreateOrConnectWithoutPracticeInput } from './programming-question-create-or-connect-without-practice.input';
import { ProgrammingQuestionUpsertWithoutPracticeInput } from './programming-question-upsert-without-practice.input';
import { ProgrammingQuestionWhereUniqueInput } from './programming-question-where-unique.input';
import { ProgrammingQuestionUpdateWithoutPracticeInput } from './programming-question-update-without-practice.input';

@InputType()
export class ProgrammingQuestionUpdateOneRequiredWithoutPracticeInput {

    @Field(() => ProgrammingQuestionCreateWithoutPracticeInput, {nullable:true})
    create?: ProgrammingQuestionCreateWithoutPracticeInput;

    @Field(() => ProgrammingQuestionCreateOrConnectWithoutPracticeInput, {nullable:true})
    connectOrCreate?: ProgrammingQuestionCreateOrConnectWithoutPracticeInput;

    @Field(() => ProgrammingQuestionUpsertWithoutPracticeInput, {nullable:true})
    upsert?: ProgrammingQuestionUpsertWithoutPracticeInput;

    @Field(() => ProgrammingQuestionWhereUniqueInput, {nullable:true})
    connect?: ProgrammingQuestionWhereUniqueInput;

    @Field(() => ProgrammingQuestionUpdateWithoutPracticeInput, {nullable:true})
    update?: ProgrammingQuestionUpdateWithoutPracticeInput;
}
