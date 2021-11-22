import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationResultWhereUniqueInput } from './evaluation-result-where-unique.input';
import { EvaluationResultCreateWithoutProgrammingQuestionAnswerInput } from './evaluation-result-create-without-programming-question-answer.input';

@InputType()
export class EvaluationResultCreateOrConnectWithoutProgrammingQuestionAnswerInput {

    @Field(() => EvaluationResultWhereUniqueInput, {nullable:false})
    where!: EvaluationResultWhereUniqueInput;

    @Field(() => EvaluationResultCreateWithoutProgrammingQuestionAnswerInput, {nullable:false})
    create!: EvaluationResultCreateWithoutProgrammingQuestionAnswerInput;
}
