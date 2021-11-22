import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionAnswerUncheckedCreateNestedOneWithoutProgrammingQuestionAnswerInput } from '../question-answer/question-answer-unchecked-create-nested-one-without-programming-question-answer.input';

@InputType()
export class ProgrammingQuestionAnswerUncheckedCreateWithoutEvaluationResultsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    envirnmentId!: string;

    @Field(() => QuestionAnswerUncheckedCreateNestedOneWithoutProgrammingQuestionAnswerInput, {nullable:true})
    baseAnswer?: QuestionAnswerUncheckedCreateNestedOneWithoutProgrammingQuestionAnswerInput;
}
