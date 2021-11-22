import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InputOutputEvaluationCriteriaCreateWithoutBaseCriteriaInput } from './input-output-evaluation-criteria-create-without-base-criteria.input';
import { InputOutputEvaluationCriteriaCreateOrConnectWithoutBaseCriteriaInput } from './input-output-evaluation-criteria-create-or-connect-without-base-criteria.input';
import { InputOutputEvaluationCriteriaUpsertWithoutBaseCriteriaInput } from './input-output-evaluation-criteria-upsert-without-base-criteria.input';
import { InputOutputEvaluationCriteriaWhereUniqueInput } from './input-output-evaluation-criteria-where-unique.input';
import { InputOutputEvaluationCriteriaUpdateWithoutBaseCriteriaInput } from './input-output-evaluation-criteria-update-without-base-criteria.input';

@InputType()
export class InputOutputEvaluationCriteriaUpdateOneWithoutBaseCriteriaInput {

    @Field(() => InputOutputEvaluationCriteriaCreateWithoutBaseCriteriaInput, {nullable:true})
    create?: InputOutputEvaluationCriteriaCreateWithoutBaseCriteriaInput;

    @Field(() => InputOutputEvaluationCriteriaCreateOrConnectWithoutBaseCriteriaInput, {nullable:true})
    connectOrCreate?: InputOutputEvaluationCriteriaCreateOrConnectWithoutBaseCriteriaInput;

    @Field(() => InputOutputEvaluationCriteriaUpsertWithoutBaseCriteriaInput, {nullable:true})
    upsert?: InputOutputEvaluationCriteriaUpsertWithoutBaseCriteriaInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => InputOutputEvaluationCriteriaWhereUniqueInput, {nullable:true})
    connect?: InputOutputEvaluationCriteriaWhereUniqueInput;

    @Field(() => InputOutputEvaluationCriteriaUpdateWithoutBaseCriteriaInput, {nullable:true})
    update?: InputOutputEvaluationCriteriaUpdateWithoutBaseCriteriaInput;
}
