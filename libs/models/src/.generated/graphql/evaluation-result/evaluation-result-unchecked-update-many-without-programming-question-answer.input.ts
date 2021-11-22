import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationResultCreateWithoutProgrammingQuestionAnswerInput } from './evaluation-result-create-without-programming-question-answer.input';
import { EvaluationResultCreateOrConnectWithoutProgrammingQuestionAnswerInput } from './evaluation-result-create-or-connect-without-programming-question-answer.input';
import { EvaluationResultUpsertWithWhereUniqueWithoutProgrammingQuestionAnswerInput } from './evaluation-result-upsert-with-where-unique-without-programming-question-answer.input';
import { EvaluationResultCreateManyProgrammingQuestionAnswerInputEnvelope } from './evaluation-result-create-many-programming-question-answer-input-envelope.input';
import { EvaluationResultWhereUniqueInput } from './evaluation-result-where-unique.input';
import { EvaluationResultUpdateWithWhereUniqueWithoutProgrammingQuestionAnswerInput } from './evaluation-result-update-with-where-unique-without-programming-question-answer.input';
import { EvaluationResultUpdateManyWithWhereWithoutProgrammingQuestionAnswerInput } from './evaluation-result-update-many-with-where-without-programming-question-answer.input';
import { EvaluationResultScalarWhereInput } from './evaluation-result-scalar-where.input';

@InputType()
export class EvaluationResultUncheckedUpdateManyWithoutProgrammingQuestionAnswerInput {

    @Field(() => [EvaluationResultCreateWithoutProgrammingQuestionAnswerInput], {nullable:true})
    create?: Array<EvaluationResultCreateWithoutProgrammingQuestionAnswerInput>;

    @Field(() => [EvaluationResultCreateOrConnectWithoutProgrammingQuestionAnswerInput], {nullable:true})
    connectOrCreate?: Array<EvaluationResultCreateOrConnectWithoutProgrammingQuestionAnswerInput>;

    @Field(() => [EvaluationResultUpsertWithWhereUniqueWithoutProgrammingQuestionAnswerInput], {nullable:true})
    upsert?: Array<EvaluationResultUpsertWithWhereUniqueWithoutProgrammingQuestionAnswerInput>;

    @Field(() => EvaluationResultCreateManyProgrammingQuestionAnswerInputEnvelope, {nullable:true})
    createMany?: EvaluationResultCreateManyProgrammingQuestionAnswerInputEnvelope;

    @Field(() => [EvaluationResultWhereUniqueInput], {nullable:true})
    set?: Array<EvaluationResultWhereUniqueInput>;

    @Field(() => [EvaluationResultWhereUniqueInput], {nullable:true})
    disconnect?: Array<EvaluationResultWhereUniqueInput>;

    @Field(() => [EvaluationResultWhereUniqueInput], {nullable:true})
    delete?: Array<EvaluationResultWhereUniqueInput>;

    @Field(() => [EvaluationResultWhereUniqueInput], {nullable:true})
    connect?: Array<EvaluationResultWhereUniqueInput>;

    @Field(() => [EvaluationResultUpdateWithWhereUniqueWithoutProgrammingQuestionAnswerInput], {nullable:true})
    update?: Array<EvaluationResultUpdateWithWhereUniqueWithoutProgrammingQuestionAnswerInput>;

    @Field(() => [EvaluationResultUpdateManyWithWhereWithoutProgrammingQuestionAnswerInput], {nullable:true})
    updateMany?: Array<EvaluationResultUpdateManyWithWhereWithoutProgrammingQuestionAnswerInput>;

    @Field(() => [EvaluationResultScalarWhereInput], {nullable:true})
    deleteMany?: Array<EvaluationResultScalarWhereInput>;
}
