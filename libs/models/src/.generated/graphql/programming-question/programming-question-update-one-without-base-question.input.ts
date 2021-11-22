import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionCreateWithoutBaseQuestionInput } from './programming-question-create-without-base-question.input';
import { ProgrammingQuestionCreateOrConnectWithoutBaseQuestionInput } from './programming-question-create-or-connect-without-base-question.input';
import { ProgrammingQuestionUpsertWithoutBaseQuestionInput } from './programming-question-upsert-without-base-question.input';
import { ProgrammingQuestionWhereUniqueInput } from './programming-question-where-unique.input';
import { ProgrammingQuestionUpdateWithoutBaseQuestionInput } from './programming-question-update-without-base-question.input';

@InputType()
export class ProgrammingQuestionUpdateOneWithoutBaseQuestionInput {

    @Field(() => ProgrammingQuestionCreateWithoutBaseQuestionInput, {nullable:true})
    create?: ProgrammingQuestionCreateWithoutBaseQuestionInput;

    @Field(() => ProgrammingQuestionCreateOrConnectWithoutBaseQuestionInput, {nullable:true})
    connectOrCreate?: ProgrammingQuestionCreateOrConnectWithoutBaseQuestionInput;

    @Field(() => ProgrammingQuestionUpsertWithoutBaseQuestionInput, {nullable:true})
    upsert?: ProgrammingQuestionUpsertWithoutBaseQuestionInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ProgrammingQuestionWhereUniqueInput, {nullable:true})
    connect?: ProgrammingQuestionWhereUniqueInput;

    @Field(() => ProgrammingQuestionUpdateWithoutBaseQuestionInput, {nullable:true})
    update?: ProgrammingQuestionUpdateWithoutBaseQuestionInput;
}
