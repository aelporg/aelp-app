import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionCreateWithoutMultipleChoiceQuestionInput } from './question-create-without-multiple-choice-question.input';
import { QuestionCreateOrConnectWithoutMultipleChoiceQuestionInput } from './question-create-or-connect-without-multiple-choice-question.input';
import { QuestionUpsertWithoutMultipleChoiceQuestionInput } from './question-upsert-without-multiple-choice-question.input';
import { QuestionWhereUniqueInput } from './question-where-unique.input';
import { QuestionUpdateWithoutMultipleChoiceQuestionInput } from './question-update-without-multiple-choice-question.input';

@InputType()
export class QuestionUncheckedUpdateOneWithoutMultipleChoiceQuestionInput {

    @Field(() => QuestionCreateWithoutMultipleChoiceQuestionInput, {nullable:true})
    create?: QuestionCreateWithoutMultipleChoiceQuestionInput;

    @Field(() => QuestionCreateOrConnectWithoutMultipleChoiceQuestionInput, {nullable:true})
    connectOrCreate?: QuestionCreateOrConnectWithoutMultipleChoiceQuestionInput;

    @Field(() => QuestionUpsertWithoutMultipleChoiceQuestionInput, {nullable:true})
    upsert?: QuestionUpsertWithoutMultipleChoiceQuestionInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => QuestionWhereUniqueInput, {nullable:true})
    connect?: QuestionWhereUniqueInput;

    @Field(() => QuestionUpdateWithoutMultipleChoiceQuestionInput, {nullable:true})
    update?: QuestionUpdateWithoutMultipleChoiceQuestionInput;
}
