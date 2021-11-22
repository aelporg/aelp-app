import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionAnswerCreateWithoutEvaluationResultsInput } from './programming-question-answer-create-without-evaluation-results.input';
import { ProgrammingQuestionAnswerCreateOrConnectWithoutEvaluationResultsInput } from './programming-question-answer-create-or-connect-without-evaluation-results.input';
import { ProgrammingQuestionAnswerWhereUniqueInput } from './programming-question-answer-where-unique.input';

@InputType()
export class ProgrammingQuestionAnswerCreateNestedOneWithoutEvaluationResultsInput {

    @Field(() => ProgrammingQuestionAnswerCreateWithoutEvaluationResultsInput, {nullable:true})
    create?: ProgrammingQuestionAnswerCreateWithoutEvaluationResultsInput;

    @Field(() => ProgrammingQuestionAnswerCreateOrConnectWithoutEvaluationResultsInput, {nullable:true})
    connectOrCreate?: ProgrammingQuestionAnswerCreateOrConnectWithoutEvaluationResultsInput;

    @Field(() => ProgrammingQuestionAnswerWhereUniqueInput, {nullable:true})
    connect?: ProgrammingQuestionAnswerWhereUniqueInput;
}
