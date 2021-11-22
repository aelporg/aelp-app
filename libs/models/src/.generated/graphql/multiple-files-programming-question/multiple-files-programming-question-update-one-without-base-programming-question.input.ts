import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleFilesProgrammingQuestionCreateWithoutBaseProgrammingQuestionInput } from './multiple-files-programming-question-create-without-base-programming-question.input';
import { MultipleFilesProgrammingQuestionCreateOrConnectWithoutBaseProgrammingQuestionInput } from './multiple-files-programming-question-create-or-connect-without-base-programming-question.input';
import { MultipleFilesProgrammingQuestionUpsertWithoutBaseProgrammingQuestionInput } from './multiple-files-programming-question-upsert-without-base-programming-question.input';
import { MultipleFilesProgrammingQuestionWhereUniqueInput } from './multiple-files-programming-question-where-unique.input';
import { MultipleFilesProgrammingQuestionUpdateWithoutBaseProgrammingQuestionInput } from './multiple-files-programming-question-update-without-base-programming-question.input';

@InputType()
export class MultipleFilesProgrammingQuestionUpdateOneWithoutBaseProgrammingQuestionInput {

    @Field(() => MultipleFilesProgrammingQuestionCreateWithoutBaseProgrammingQuestionInput, {nullable:true})
    create?: MultipleFilesProgrammingQuestionCreateWithoutBaseProgrammingQuestionInput;

    @Field(() => MultipleFilesProgrammingQuestionCreateOrConnectWithoutBaseProgrammingQuestionInput, {nullable:true})
    connectOrCreate?: MultipleFilesProgrammingQuestionCreateOrConnectWithoutBaseProgrammingQuestionInput;

    @Field(() => MultipleFilesProgrammingQuestionUpsertWithoutBaseProgrammingQuestionInput, {nullable:true})
    upsert?: MultipleFilesProgrammingQuestionUpsertWithoutBaseProgrammingQuestionInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => MultipleFilesProgrammingQuestionWhereUniqueInput, {nullable:true})
    connect?: MultipleFilesProgrammingQuestionWhereUniqueInput;

    @Field(() => MultipleFilesProgrammingQuestionUpdateWithoutBaseProgrammingQuestionInput, {nullable:true})
    update?: MultipleFilesProgrammingQuestionUpdateWithoutBaseProgrammingQuestionInput;
}
