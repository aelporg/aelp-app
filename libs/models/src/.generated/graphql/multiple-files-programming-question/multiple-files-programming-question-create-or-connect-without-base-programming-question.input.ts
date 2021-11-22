import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleFilesProgrammingQuestionWhereUniqueInput } from './multiple-files-programming-question-where-unique.input';
import { MultipleFilesProgrammingQuestionCreateWithoutBaseProgrammingQuestionInput } from './multiple-files-programming-question-create-without-base-programming-question.input';

@InputType()
export class MultipleFilesProgrammingQuestionCreateOrConnectWithoutBaseProgrammingQuestionInput {

    @Field(() => MultipleFilesProgrammingQuestionWhereUniqueInput, {nullable:false})
    where!: MultipleFilesProgrammingQuestionWhereUniqueInput;

    @Field(() => MultipleFilesProgrammingQuestionCreateWithoutBaseProgrammingQuestionInput, {nullable:false})
    create!: MultipleFilesProgrammingQuestionCreateWithoutBaseProgrammingQuestionInput;
}
