import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionWhereUniqueInput } from './question-where-unique.input';
import { QuestionCreateWithoutMultipleChoiceQuestionInput } from './question-create-without-multiple-choice-question.input';

@InputType()
export class QuestionCreateOrConnectWithoutMultipleChoiceQuestionInput {

    @Field(() => QuestionWhereUniqueInput, {nullable:false})
    where!: QuestionWhereUniqueInput;

    @Field(() => QuestionCreateWithoutMultipleChoiceQuestionInput, {nullable:false})
    create!: QuestionCreateWithoutMultipleChoiceQuestionInput;
}
