import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionCreateWithoutBaseQuestionInput } from './multiple-choice-question-create-without-base-question.input';
import { MultipleChoiceQuestionCreateOrConnectWithoutBaseQuestionInput } from './multiple-choice-question-create-or-connect-without-base-question.input';
import { MultipleChoiceQuestionUpsertWithoutBaseQuestionInput } from './multiple-choice-question-upsert-without-base-question.input';
import { MultipleChoiceQuestionWhereUniqueInput } from './multiple-choice-question-where-unique.input';
import { MultipleChoiceQuestionUpdateWithoutBaseQuestionInput } from './multiple-choice-question-update-without-base-question.input';

@InputType()
export class MultipleChoiceQuestionUpdateOneWithoutBaseQuestionInput {

    @Field(() => MultipleChoiceQuestionCreateWithoutBaseQuestionInput, {nullable:true})
    create?: MultipleChoiceQuestionCreateWithoutBaseQuestionInput;

    @Field(() => MultipleChoiceQuestionCreateOrConnectWithoutBaseQuestionInput, {nullable:true})
    connectOrCreate?: MultipleChoiceQuestionCreateOrConnectWithoutBaseQuestionInput;

    @Field(() => MultipleChoiceQuestionUpsertWithoutBaseQuestionInput, {nullable:true})
    upsert?: MultipleChoiceQuestionUpsertWithoutBaseQuestionInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => MultipleChoiceQuestionWhereUniqueInput, {nullable:true})
    connect?: MultipleChoiceQuestionWhereUniqueInput;

    @Field(() => MultipleChoiceQuestionUpdateWithoutBaseQuestionInput, {nullable:true})
    update?: MultipleChoiceQuestionUpdateWithoutBaseQuestionInput;
}
