import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationCriteriaCreateWithoutProgrammingQuestionInput } from './evaluation-criteria-create-without-programming-question.input';
import { EvaluationCriteriaCreateOrConnectWithoutProgrammingQuestionInput } from './evaluation-criteria-create-or-connect-without-programming-question.input';
import { EvaluationCriteriaUpsertWithWhereUniqueWithoutProgrammingQuestionInput } from './evaluation-criteria-upsert-with-where-unique-without-programming-question.input';
import { EvaluationCriteriaCreateManyProgrammingQuestionInputEnvelope } from './evaluation-criteria-create-many-programming-question-input-envelope.input';
import { EvaluationCriteriaWhereUniqueInput } from './evaluation-criteria-where-unique.input';
import { EvaluationCriteriaUpdateWithWhereUniqueWithoutProgrammingQuestionInput } from './evaluation-criteria-update-with-where-unique-without-programming-question.input';
import { EvaluationCriteriaUpdateManyWithWhereWithoutProgrammingQuestionInput } from './evaluation-criteria-update-many-with-where-without-programming-question.input';
import { EvaluationCriteriaScalarWhereInput } from './evaluation-criteria-scalar-where.input';

@InputType()
export class EvaluationCriteriaUncheckedUpdateManyWithoutProgrammingQuestionInput {

    @Field(() => [EvaluationCriteriaCreateWithoutProgrammingQuestionInput], {nullable:true})
    create?: Array<EvaluationCriteriaCreateWithoutProgrammingQuestionInput>;

    @Field(() => [EvaluationCriteriaCreateOrConnectWithoutProgrammingQuestionInput], {nullable:true})
    connectOrCreate?: Array<EvaluationCriteriaCreateOrConnectWithoutProgrammingQuestionInput>;

    @Field(() => [EvaluationCriteriaUpsertWithWhereUniqueWithoutProgrammingQuestionInput], {nullable:true})
    upsert?: Array<EvaluationCriteriaUpsertWithWhereUniqueWithoutProgrammingQuestionInput>;

    @Field(() => EvaluationCriteriaCreateManyProgrammingQuestionInputEnvelope, {nullable:true})
    createMany?: EvaluationCriteriaCreateManyProgrammingQuestionInputEnvelope;

    @Field(() => [EvaluationCriteriaWhereUniqueInput], {nullable:true})
    set?: Array<EvaluationCriteriaWhereUniqueInput>;

    @Field(() => [EvaluationCriteriaWhereUniqueInput], {nullable:true})
    disconnect?: Array<EvaluationCriteriaWhereUniqueInput>;

    @Field(() => [EvaluationCriteriaWhereUniqueInput], {nullable:true})
    delete?: Array<EvaluationCriteriaWhereUniqueInput>;

    @Field(() => [EvaluationCriteriaWhereUniqueInput], {nullable:true})
    connect?: Array<EvaluationCriteriaWhereUniqueInput>;

    @Field(() => [EvaluationCriteriaUpdateWithWhereUniqueWithoutProgrammingQuestionInput], {nullable:true})
    update?: Array<EvaluationCriteriaUpdateWithWhereUniqueWithoutProgrammingQuestionInput>;

    @Field(() => [EvaluationCriteriaUpdateManyWithWhereWithoutProgrammingQuestionInput], {nullable:true})
    updateMany?: Array<EvaluationCriteriaUpdateManyWithWhereWithoutProgrammingQuestionInput>;

    @Field(() => [EvaluationCriteriaScalarWhereInput], {nullable:true})
    deleteMany?: Array<EvaluationCriteriaScalarWhereInput>;
}
