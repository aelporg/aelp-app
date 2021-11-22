import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionChoiceCreateWithoutAnswersInput } from './multiple-choice-question-choice-create-without-answers.input';
import { MultipleChoiceQuestionChoiceCreateOrConnectWithoutAnswersInput } from './multiple-choice-question-choice-create-or-connect-without-answers.input';
import { MultipleChoiceQuestionChoiceWhereUniqueInput } from './multiple-choice-question-choice-where-unique.input';

@InputType()
export class MultipleChoiceQuestionChoiceCreateNestedOneWithoutAnswersInput {

    @Field(() => MultipleChoiceQuestionChoiceCreateWithoutAnswersInput, {nullable:true})
    create?: MultipleChoiceQuestionChoiceCreateWithoutAnswersInput;

    @Field(() => MultipleChoiceQuestionChoiceCreateOrConnectWithoutAnswersInput, {nullable:true})
    connectOrCreate?: MultipleChoiceQuestionChoiceCreateOrConnectWithoutAnswersInput;

    @Field(() => MultipleChoiceQuestionChoiceWhereUniqueInput, {nullable:true})
    connect?: MultipleChoiceQuestionChoiceWhereUniqueInput;
}
