import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnvironmentCreateNestedOneWithoutAnswersInput } from '../environment/environment-create-nested-one-without-answers.input';
import { EvaluationResultCreateNestedManyWithoutProgrammingQuestionAnswerInput } from '../evaluation-result/evaluation-result-create-nested-many-without-programming-question-answer.input';

@InputType()
export class ProgrammingQuestionAnswerCreateWithoutBaseAnswerInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => EnvironmentCreateNestedOneWithoutAnswersInput, {nullable:false})
    envirnment!: EnvironmentCreateNestedOneWithoutAnswersInput;

    @Field(() => EvaluationResultCreateNestedManyWithoutProgrammingQuestionAnswerInput, {nullable:true})
    evaluationResults?: EvaluationResultCreateNestedManyWithoutProgrammingQuestionAnswerInput;
}
