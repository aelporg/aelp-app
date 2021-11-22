import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionWhereUniqueInput } from './programming-question-where-unique.input';
import { ProgrammingQuestionCreateWithoutBaseQuestionInput } from './programming-question-create-without-base-question.input';

@InputType()
export class ProgrammingQuestionCreateOrConnectWithoutBaseQuestionInput {

    @Field(() => ProgrammingQuestionWhereUniqueInput, {nullable:false})
    where!: ProgrammingQuestionWhereUniqueInput;

    @Field(() => ProgrammingQuestionCreateWithoutBaseQuestionInput, {nullable:false})
    create!: ProgrammingQuestionCreateWithoutBaseQuestionInput;
}
