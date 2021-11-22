import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationResultUncheckedCreateNestedManyWithoutProgrammingQuestionAnswerInput } from '../evaluation-result/evaluation-result-unchecked-create-nested-many-without-programming-question-answer.input';

@InputType()
export class ProgrammingQuestionAnswerUncheckedCreateWithoutBaseAnswerInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    envirnmentId!: string;

    @Field(() => EvaluationResultUncheckedCreateNestedManyWithoutProgrammingQuestionAnswerInput, {nullable:true})
    evaluationResults?: EvaluationResultUncheckedCreateNestedManyWithoutProgrammingQuestionAnswerInput;
}
