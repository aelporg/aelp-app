import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionChoiceWhereUniqueInput } from './multiple-choice-question-choice-where-unique.input';
import { MultipleChoiceQuestionChoiceCreateWithoutAnswersInput } from './multiple-choice-question-choice-create-without-answers.input';

@InputType()
export class MultipleChoiceQuestionChoiceCreateOrConnectWithoutAnswersInput {

    @Field(() => MultipleChoiceQuestionChoiceWhereUniqueInput, {nullable:false})
    where!: MultipleChoiceQuestionChoiceWhereUniqueInput;

    @Field(() => MultipleChoiceQuestionChoiceCreateWithoutAnswersInput, {nullable:false})
    create!: MultipleChoiceQuestionChoiceCreateWithoutAnswersInput;
}
