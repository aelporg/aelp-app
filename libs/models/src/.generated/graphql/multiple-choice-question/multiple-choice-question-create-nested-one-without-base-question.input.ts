import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionCreateWithoutBaseQuestionInput } from './multiple-choice-question-create-without-base-question.input';
import { MultipleChoiceQuestionCreateOrConnectWithoutBaseQuestionInput } from './multiple-choice-question-create-or-connect-without-base-question.input';
import { MultipleChoiceQuestionWhereUniqueInput } from './multiple-choice-question-where-unique.input';

@InputType()
export class MultipleChoiceQuestionCreateNestedOneWithoutBaseQuestionInput {

    @Field(() => MultipleChoiceQuestionCreateWithoutBaseQuestionInput, {nullable:true})
    create?: MultipleChoiceQuestionCreateWithoutBaseQuestionInput;

    @Field(() => MultipleChoiceQuestionCreateOrConnectWithoutBaseQuestionInput, {nullable:true})
    connectOrCreate?: MultipleChoiceQuestionCreateOrConnectWithoutBaseQuestionInput;

    @Field(() => MultipleChoiceQuestionWhereUniqueInput, {nullable:true})
    connect?: MultipleChoiceQuestionWhereUniqueInput;
}
