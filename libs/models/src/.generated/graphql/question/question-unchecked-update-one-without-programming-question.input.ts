import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionCreateWithoutProgrammingQuestionInput } from './question-create-without-programming-question.input';
import { QuestionCreateOrConnectWithoutProgrammingQuestionInput } from './question-create-or-connect-without-programming-question.input';
import { QuestionUpsertWithoutProgrammingQuestionInput } from './question-upsert-without-programming-question.input';
import { QuestionWhereUniqueInput } from './question-where-unique.input';
import { QuestionUpdateWithoutProgrammingQuestionInput } from './question-update-without-programming-question.input';

@InputType()
export class QuestionUncheckedUpdateOneWithoutProgrammingQuestionInput {

    @Field(() => QuestionCreateWithoutProgrammingQuestionInput, {nullable:true})
    create?: QuestionCreateWithoutProgrammingQuestionInput;

    @Field(() => QuestionCreateOrConnectWithoutProgrammingQuestionInput, {nullable:true})
    connectOrCreate?: QuestionCreateOrConnectWithoutProgrammingQuestionInput;

    @Field(() => QuestionUpsertWithoutProgrammingQuestionInput, {nullable:true})
    upsert?: QuestionUpsertWithoutProgrammingQuestionInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => QuestionWhereUniqueInput, {nullable:true})
    connect?: QuestionWhereUniqueInput;

    @Field(() => QuestionUpdateWithoutProgrammingQuestionInput, {nullable:true})
    update?: QuestionUpdateWithoutProgrammingQuestionInput;
}
