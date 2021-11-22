import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionCreateWithoutBaseQuestionInput } from './programming-question-create-without-base-question.input';
import { ProgrammingQuestionCreateOrConnectWithoutBaseQuestionInput } from './programming-question-create-or-connect-without-base-question.input';
import { ProgrammingQuestionWhereUniqueInput } from './programming-question-where-unique.input';

@InputType()
export class ProgrammingQuestionCreateNestedOneWithoutBaseQuestionInput {

    @Field(() => ProgrammingQuestionCreateWithoutBaseQuestionInput, {nullable:true})
    create?: ProgrammingQuestionCreateWithoutBaseQuestionInput;

    @Field(() => ProgrammingQuestionCreateOrConnectWithoutBaseQuestionInput, {nullable:true})
    connectOrCreate?: ProgrammingQuestionCreateOrConnectWithoutBaseQuestionInput;

    @Field(() => ProgrammingQuestionWhereUniqueInput, {nullable:true})
    connect?: ProgrammingQuestionWhereUniqueInput;
}
