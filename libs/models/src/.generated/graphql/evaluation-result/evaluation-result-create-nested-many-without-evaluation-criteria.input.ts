import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationResultCreateWithoutEvaluationCriteriaInput } from './evaluation-result-create-without-evaluation-criteria.input';
import { EvaluationResultCreateOrConnectWithoutEvaluationCriteriaInput } from './evaluation-result-create-or-connect-without-evaluation-criteria.input';
import { EvaluationResultCreateManyEvaluationCriteriaInputEnvelope } from './evaluation-result-create-many-evaluation-criteria-input-envelope.input';
import { EvaluationResultWhereUniqueInput } from './evaluation-result-where-unique.input';

@InputType()
export class EvaluationResultCreateNestedManyWithoutEvaluationCriteriaInput {

    @Field(() => [EvaluationResultCreateWithoutEvaluationCriteriaInput], {nullable:true})
    create?: Array<EvaluationResultCreateWithoutEvaluationCriteriaInput>;

    @Field(() => [EvaluationResultCreateOrConnectWithoutEvaluationCriteriaInput], {nullable:true})
    connectOrCreate?: Array<EvaluationResultCreateOrConnectWithoutEvaluationCriteriaInput>;

    @Field(() => EvaluationResultCreateManyEvaluationCriteriaInputEnvelope, {nullable:true})
    createMany?: EvaluationResultCreateManyEvaluationCriteriaInputEnvelope;

    @Field(() => [EvaluationResultWhereUniqueInput], {nullable:true})
    connect?: Array<EvaluationResultWhereUniqueInput>;
}
