import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationResultWhereUniqueInput } from './evaluation-result-where-unique.input';
import { EvaluationResultUpdateWithoutProgrammingQuestionAnswerInput } from './evaluation-result-update-without-programming-question-answer.input';

@InputType()
export class EvaluationResultUpdateWithWhereUniqueWithoutProgrammingQuestionAnswerInput {

    @Field(() => EvaluationResultWhereUniqueInput, {nullable:false})
    where!: EvaluationResultWhereUniqueInput;

    @Field(() => EvaluationResultUpdateWithoutProgrammingQuestionAnswerInput, {nullable:false})
    data!: EvaluationResultUpdateWithoutProgrammingQuestionAnswerInput;
}
