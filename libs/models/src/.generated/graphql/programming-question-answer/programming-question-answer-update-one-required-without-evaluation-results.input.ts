import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionAnswerCreateWithoutEvaluationResultsInput } from './programming-question-answer-create-without-evaluation-results.input';
import { ProgrammingQuestionAnswerCreateOrConnectWithoutEvaluationResultsInput } from './programming-question-answer-create-or-connect-without-evaluation-results.input';
import { ProgrammingQuestionAnswerUpsertWithoutEvaluationResultsInput } from './programming-question-answer-upsert-without-evaluation-results.input';
import { ProgrammingQuestionAnswerWhereUniqueInput } from './programming-question-answer-where-unique.input';
import { ProgrammingQuestionAnswerUpdateWithoutEvaluationResultsInput } from './programming-question-answer-update-without-evaluation-results.input';

@InputType()
export class ProgrammingQuestionAnswerUpdateOneRequiredWithoutEvaluationResultsInput {

    @Field(() => ProgrammingQuestionAnswerCreateWithoutEvaluationResultsInput, {nullable:true})
    create?: ProgrammingQuestionAnswerCreateWithoutEvaluationResultsInput;

    @Field(() => ProgrammingQuestionAnswerCreateOrConnectWithoutEvaluationResultsInput, {nullable:true})
    connectOrCreate?: ProgrammingQuestionAnswerCreateOrConnectWithoutEvaluationResultsInput;

    @Field(() => ProgrammingQuestionAnswerUpsertWithoutEvaluationResultsInput, {nullable:true})
    upsert?: ProgrammingQuestionAnswerUpsertWithoutEvaluationResultsInput;

    @Field(() => ProgrammingQuestionAnswerWhereUniqueInput, {nullable:true})
    connect?: ProgrammingQuestionAnswerWhereUniqueInput;

    @Field(() => ProgrammingQuestionAnswerUpdateWithoutEvaluationResultsInput, {nullable:true})
    update?: ProgrammingQuestionAnswerUpdateWithoutEvaluationResultsInput;
}
