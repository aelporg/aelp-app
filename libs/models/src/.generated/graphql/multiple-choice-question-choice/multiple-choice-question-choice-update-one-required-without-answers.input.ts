import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionChoiceCreateWithoutAnswersInput } from './multiple-choice-question-choice-create-without-answers.input';
import { MultipleChoiceQuestionChoiceCreateOrConnectWithoutAnswersInput } from './multiple-choice-question-choice-create-or-connect-without-answers.input';
import { MultipleChoiceQuestionChoiceUpsertWithoutAnswersInput } from './multiple-choice-question-choice-upsert-without-answers.input';
import { MultipleChoiceQuestionChoiceWhereUniqueInput } from './multiple-choice-question-choice-where-unique.input';
import { MultipleChoiceQuestionChoiceUpdateWithoutAnswersInput } from './multiple-choice-question-choice-update-without-answers.input';

@InputType()
export class MultipleChoiceQuestionChoiceUpdateOneRequiredWithoutAnswersInput {

    @Field(() => MultipleChoiceQuestionChoiceCreateWithoutAnswersInput, {nullable:true})
    create?: MultipleChoiceQuestionChoiceCreateWithoutAnswersInput;

    @Field(() => MultipleChoiceQuestionChoiceCreateOrConnectWithoutAnswersInput, {nullable:true})
    connectOrCreate?: MultipleChoiceQuestionChoiceCreateOrConnectWithoutAnswersInput;

    @Field(() => MultipleChoiceQuestionChoiceUpsertWithoutAnswersInput, {nullable:true})
    upsert?: MultipleChoiceQuestionChoiceUpsertWithoutAnswersInput;

    @Field(() => MultipleChoiceQuestionChoiceWhereUniqueInput, {nullable:true})
    connect?: MultipleChoiceQuestionChoiceWhereUniqueInput;

    @Field(() => MultipleChoiceQuestionChoiceUpdateWithoutAnswersInput, {nullable:true})
    update?: MultipleChoiceQuestionChoiceUpdateWithoutAnswersInput;
}
