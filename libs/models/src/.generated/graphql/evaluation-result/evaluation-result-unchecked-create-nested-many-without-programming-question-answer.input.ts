import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationResultCreateWithoutProgrammingQuestionAnswerInput } from './evaluation-result-create-without-programming-question-answer.input';
import { EvaluationResultCreateOrConnectWithoutProgrammingQuestionAnswerInput } from './evaluation-result-create-or-connect-without-programming-question-answer.input';
import { EvaluationResultCreateManyProgrammingQuestionAnswerInputEnvelope } from './evaluation-result-create-many-programming-question-answer-input-envelope.input';
import { EvaluationResultWhereUniqueInput } from './evaluation-result-where-unique.input';

@InputType()
export class EvaluationResultUncheckedCreateNestedManyWithoutProgrammingQuestionAnswerInput {

    @Field(() => [EvaluationResultCreateWithoutProgrammingQuestionAnswerInput], {nullable:true})
    create?: Array<EvaluationResultCreateWithoutProgrammingQuestionAnswerInput>;

    @Field(() => [EvaluationResultCreateOrConnectWithoutProgrammingQuestionAnswerInput], {nullable:true})
    connectOrCreate?: Array<EvaluationResultCreateOrConnectWithoutProgrammingQuestionAnswerInput>;

    @Field(() => EvaluationResultCreateManyProgrammingQuestionAnswerInputEnvelope, {nullable:true})
    createMany?: EvaluationResultCreateManyProgrammingQuestionAnswerInputEnvelope;

    @Field(() => [EvaluationResultWhereUniqueInput], {nullable:true})
    connect?: Array<EvaluationResultWhereUniqueInput>;
}
