import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PracticeProgrammingQuestionCreateWithoutQuestionInput } from './practice-programming-question-create-without-question.input';
import { PracticeProgrammingQuestionCreateOrConnectWithoutQuestionInput } from './practice-programming-question-create-or-connect-without-question.input';
import { PracticeProgrammingQuestionUpsertWithoutQuestionInput } from './practice-programming-question-upsert-without-question.input';
import { PracticeProgrammingQuestionWhereUniqueInput } from './practice-programming-question-where-unique.input';
import { PracticeProgrammingQuestionUpdateWithoutQuestionInput } from './practice-programming-question-update-without-question.input';

@InputType()
export class PracticeProgrammingQuestionUncheckedUpdateOneWithoutQuestionInput {

    @Field(() => PracticeProgrammingQuestionCreateWithoutQuestionInput, {nullable:true})
    create?: PracticeProgrammingQuestionCreateWithoutQuestionInput;

    @Field(() => PracticeProgrammingQuestionCreateOrConnectWithoutQuestionInput, {nullable:true})
    connectOrCreate?: PracticeProgrammingQuestionCreateOrConnectWithoutQuestionInput;

    @Field(() => PracticeProgrammingQuestionUpsertWithoutQuestionInput, {nullable:true})
    upsert?: PracticeProgrammingQuestionUpsertWithoutQuestionInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => PracticeProgrammingQuestionWhereUniqueInput, {nullable:true})
    connect?: PracticeProgrammingQuestionWhereUniqueInput;

    @Field(() => PracticeProgrammingQuestionUpdateWithoutQuestionInput, {nullable:true})
    update?: PracticeProgrammingQuestionUpdateWithoutQuestionInput;
}
