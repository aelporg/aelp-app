import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleFilesProgrammingQuestionCreateWithoutBaseProgrammingQuestionInput } from './multiple-files-programming-question-create-without-base-programming-question.input';
import { MultipleFilesProgrammingQuestionCreateOrConnectWithoutBaseProgrammingQuestionInput } from './multiple-files-programming-question-create-or-connect-without-base-programming-question.input';
import { MultipleFilesProgrammingQuestionWhereUniqueInput } from './multiple-files-programming-question-where-unique.input';

@InputType()
export class MultipleFilesProgrammingQuestionCreateNestedOneWithoutBaseProgrammingQuestionInput {

    @Field(() => MultipleFilesProgrammingQuestionCreateWithoutBaseProgrammingQuestionInput, {nullable:true})
    create?: MultipleFilesProgrammingQuestionCreateWithoutBaseProgrammingQuestionInput;

    @Field(() => MultipleFilesProgrammingQuestionCreateOrConnectWithoutBaseProgrammingQuestionInput, {nullable:true})
    connectOrCreate?: MultipleFilesProgrammingQuestionCreateOrConnectWithoutBaseProgrammingQuestionInput;

    @Field(() => MultipleFilesProgrammingQuestionWhereUniqueInput, {nullable:true})
    connect?: MultipleFilesProgrammingQuestionWhereUniqueInput;
}
