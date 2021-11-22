import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionAnswerWhereUniqueInput } from './programming-question-answer-where-unique.input';
import { ProgrammingQuestionAnswerCreateWithoutEvaluationResultsInput } from './programming-question-answer-create-without-evaluation-results.input';

@InputType()
export class ProgrammingQuestionAnswerCreateOrConnectWithoutEvaluationResultsInput {

    @Field(() => ProgrammingQuestionAnswerWhereUniqueInput, {nullable:false})
    where!: ProgrammingQuestionAnswerWhereUniqueInput;

    @Field(() => ProgrammingQuestionAnswerCreateWithoutEvaluationResultsInput, {nullable:false})
    create!: ProgrammingQuestionAnswerCreateWithoutEvaluationResultsInput;
}
