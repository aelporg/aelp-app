import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionCreateWithoutMultipleChoiceQuestionInput } from './question-create-without-multiple-choice-question.input';
import { QuestionCreateOrConnectWithoutMultipleChoiceQuestionInput } from './question-create-or-connect-without-multiple-choice-question.input';
import { QuestionWhereUniqueInput } from './question-where-unique.input';

@InputType()
export class QuestionUncheckedCreateNestedOneWithoutMultipleChoiceQuestionInput {

    @Field(() => QuestionCreateWithoutMultipleChoiceQuestionInput, {nullable:true})
    create?: QuestionCreateWithoutMultipleChoiceQuestionInput;

    @Field(() => QuestionCreateOrConnectWithoutMultipleChoiceQuestionInput, {nullable:true})
    connectOrCreate?: QuestionCreateOrConnectWithoutMultipleChoiceQuestionInput;

    @Field(() => QuestionWhereUniqueInput, {nullable:true})
    connect?: QuestionWhereUniqueInput;
}
