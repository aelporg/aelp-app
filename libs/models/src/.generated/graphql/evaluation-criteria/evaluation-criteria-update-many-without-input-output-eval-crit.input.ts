import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationCriteriaCreateWithoutInputOutputEvalCritInput } from './evaluation-criteria-create-without-input-output-eval-crit.input';
import { EvaluationCriteriaCreateOrConnectWithoutInputOutputEvalCritInput } from './evaluation-criteria-create-or-connect-without-input-output-eval-crit.input';
import { EvaluationCriteriaUpsertWithWhereUniqueWithoutInputOutputEvalCritInput } from './evaluation-criteria-upsert-with-where-unique-without-input-output-eval-crit.input';
import { EvaluationCriteriaCreateManyInputOutputEvalCritInputEnvelope } from './evaluation-criteria-create-many-input-output-eval-crit-input-envelope.input';
import { EvaluationCriteriaWhereUniqueInput } from './evaluation-criteria-where-unique.input';
import { EvaluationCriteriaUpdateWithWhereUniqueWithoutInputOutputEvalCritInput } from './evaluation-criteria-update-with-where-unique-without-input-output-eval-crit.input';
import { EvaluationCriteriaUpdateManyWithWhereWithoutInputOutputEvalCritInput } from './evaluation-criteria-update-many-with-where-without-input-output-eval-crit.input';
import { EvaluationCriteriaScalarWhereInput } from './evaluation-criteria-scalar-where.input';

@InputType()
export class EvaluationCriteriaUpdateManyWithoutInputOutputEvalCritInput {

    @Field(() => [EvaluationCriteriaCreateWithoutInputOutputEvalCritInput], {nullable:true})
    create?: Array<EvaluationCriteriaCreateWithoutInputOutputEvalCritInput>;

    @Field(() => [EvaluationCriteriaCreateOrConnectWithoutInputOutputEvalCritInput], {nullable:true})
    connectOrCreate?: Array<EvaluationCriteriaCreateOrConnectWithoutInputOutputEvalCritInput>;

    @Field(() => [EvaluationCriteriaUpsertWithWhereUniqueWithoutInputOutputEvalCritInput], {nullable:true})
    upsert?: Array<EvaluationCriteriaUpsertWithWhereUniqueWithoutInputOutputEvalCritInput>;

    @Field(() => EvaluationCriteriaCreateManyInputOutputEvalCritInputEnvelope, {nullable:true})
    createMany?: EvaluationCriteriaCreateManyInputOutputEvalCritInputEnvelope;

    @Field(() => [EvaluationCriteriaWhereUniqueInput], {nullable:true})
    set?: Array<EvaluationCriteriaWhereUniqueInput>;

    @Field(() => [EvaluationCriteriaWhereUniqueInput], {nullable:true})
    disconnect?: Array<EvaluationCriteriaWhereUniqueInput>;

    @Field(() => [EvaluationCriteriaWhereUniqueInput], {nullable:true})
    delete?: Array<EvaluationCriteriaWhereUniqueInput>;

    @Field(() => [EvaluationCriteriaWhereUniqueInput], {nullable:true})
    connect?: Array<EvaluationCriteriaWhereUniqueInput>;

    @Field(() => [EvaluationCriteriaUpdateWithWhereUniqueWithoutInputOutputEvalCritInput], {nullable:true})
    update?: Array<EvaluationCriteriaUpdateWithWhereUniqueWithoutInputOutputEvalCritInput>;

    @Field(() => [EvaluationCriteriaUpdateManyWithWhereWithoutInputOutputEvalCritInput], {nullable:true})
    updateMany?: Array<EvaluationCriteriaUpdateManyWithWhereWithoutInputOutputEvalCritInput>;

    @Field(() => [EvaluationCriteriaScalarWhereInput], {nullable:true})
    deleteMany?: Array<EvaluationCriteriaScalarWhereInput>;
}
