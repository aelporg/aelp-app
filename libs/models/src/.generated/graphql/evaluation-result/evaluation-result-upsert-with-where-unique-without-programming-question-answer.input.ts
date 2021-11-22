import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationResultWhereUniqueInput } from './evaluation-result-where-unique.input';
import { EvaluationResultUpdateWithoutProgrammingQuestionAnswerInput } from './evaluation-result-update-without-programming-question-answer.input';
import { EvaluationResultCreateWithoutProgrammingQuestionAnswerInput } from './evaluation-result-create-without-programming-question-answer.input';

@InputType()
export class EvaluationResultUpsertWithWhereUniqueWithoutProgrammingQuestionAnswerInput {

    @Field(() => EvaluationResultWhereUniqueInput, {nullable:false})
    where!: EvaluationResultWhereUniqueInput;

    @Field(() => EvaluationResultUpdateWithoutProgrammingQuestionAnswerInput, {nullable:false})
    update!: EvaluationResultUpdateWithoutProgrammingQuestionAnswerInput;

    @Field(() => EvaluationResultCreateWithoutProgrammingQuestionAnswerInput, {nullable:false})
    create!: EvaluationResultCreateWithoutProgrammingQuestionAnswerInput;
}
