import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationResultCreateWithoutEvaluationCriteriaInput } from './evaluation-result-create-without-evaluation-criteria.input';
import { EvaluationResultCreateOrConnectWithoutEvaluationCriteriaInput } from './evaluation-result-create-or-connect-without-evaluation-criteria.input';
import { EvaluationResultUpsertWithWhereUniqueWithoutEvaluationCriteriaInput } from './evaluation-result-upsert-with-where-unique-without-evaluation-criteria.input';
import { EvaluationResultCreateManyEvaluationCriteriaInputEnvelope } from './evaluation-result-create-many-evaluation-criteria-input-envelope.input';
import { EvaluationResultWhereUniqueInput } from './evaluation-result-where-unique.input';
import { EvaluationResultUpdateWithWhereUniqueWithoutEvaluationCriteriaInput } from './evaluation-result-update-with-where-unique-without-evaluation-criteria.input';
import { EvaluationResultUpdateManyWithWhereWithoutEvaluationCriteriaInput } from './evaluation-result-update-many-with-where-without-evaluation-criteria.input';
import { EvaluationResultScalarWhereInput } from './evaluation-result-scalar-where.input';

@InputType()
export class EvaluationResultUncheckedUpdateManyWithoutEvaluationCriteriaInput {

    @Field(() => [EvaluationResultCreateWithoutEvaluationCriteriaInput], {nullable:true})
    create?: Array<EvaluationResultCreateWithoutEvaluationCriteriaInput>;

    @Field(() => [EvaluationResultCreateOrConnectWithoutEvaluationCriteriaInput], {nullable:true})
    connectOrCreate?: Array<EvaluationResultCreateOrConnectWithoutEvaluationCriteriaInput>;

    @Field(() => [EvaluationResultUpsertWithWhereUniqueWithoutEvaluationCriteriaInput], {nullable:true})
    upsert?: Array<EvaluationResultUpsertWithWhereUniqueWithoutEvaluationCriteriaInput>;

    @Field(() => EvaluationResultCreateManyEvaluationCriteriaInputEnvelope, {nullable:true})
    createMany?: EvaluationResultCreateManyEvaluationCriteriaInputEnvelope;

    @Field(() => [EvaluationResultWhereUniqueInput], {nullable:true})
    set?: Array<EvaluationResultWhereUniqueInput>;

    @Field(() => [EvaluationResultWhereUniqueInput], {nullable:true})
    disconnect?: Array<EvaluationResultWhereUniqueInput>;

    @Field(() => [EvaluationResultWhereUniqueInput], {nullable:true})
    delete?: Array<EvaluationResultWhereUniqueInput>;

    @Field(() => [EvaluationResultWhereUniqueInput], {nullable:true})
    connect?: Array<EvaluationResultWhereUniqueInput>;

    @Field(() => [EvaluationResultUpdateWithWhereUniqueWithoutEvaluationCriteriaInput], {nullable:true})
    update?: Array<EvaluationResultUpdateWithWhereUniqueWithoutEvaluationCriteriaInput>;

    @Field(() => [EvaluationResultUpdateManyWithWhereWithoutEvaluationCriteriaInput], {nullable:true})
    updateMany?: Array<EvaluationResultUpdateManyWithWhereWithoutEvaluationCriteriaInput>;

    @Field(() => [EvaluationResultScalarWhereInput], {nullable:true})
    deleteMany?: Array<EvaluationResultScalarWhereInput>;
}
