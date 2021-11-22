import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationCriteriaCreateWithoutInputOutputEvalCritInput } from './evaluation-criteria-create-without-input-output-eval-crit.input';
import { EvaluationCriteriaCreateOrConnectWithoutInputOutputEvalCritInput } from './evaluation-criteria-create-or-connect-without-input-output-eval-crit.input';
import { EvaluationCriteriaCreateManyInputOutputEvalCritInputEnvelope } from './evaluation-criteria-create-many-input-output-eval-crit-input-envelope.input';
import { EvaluationCriteriaWhereUniqueInput } from './evaluation-criteria-where-unique.input';

@InputType()
export class EvaluationCriteriaCreateNestedManyWithoutInputOutputEvalCritInput {

    @Field(() => [EvaluationCriteriaCreateWithoutInputOutputEvalCritInput], {nullable:true})
    create?: Array<EvaluationCriteriaCreateWithoutInputOutputEvalCritInput>;

    @Field(() => [EvaluationCriteriaCreateOrConnectWithoutInputOutputEvalCritInput], {nullable:true})
    connectOrCreate?: Array<EvaluationCriteriaCreateOrConnectWithoutInputOutputEvalCritInput>;

    @Field(() => EvaluationCriteriaCreateManyInputOutputEvalCritInputEnvelope, {nullable:true})
    createMany?: EvaluationCriteriaCreateManyInputOutputEvalCritInputEnvelope;

    @Field(() => [EvaluationCriteriaWhereUniqueInput], {nullable:true})
    connect?: Array<EvaluationCriteriaWhereUniqueInput>;
}
