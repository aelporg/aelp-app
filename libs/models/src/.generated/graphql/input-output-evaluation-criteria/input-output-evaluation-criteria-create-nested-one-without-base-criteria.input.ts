import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InputOutputEvaluationCriteriaCreateWithoutBaseCriteriaInput } from './input-output-evaluation-criteria-create-without-base-criteria.input';
import { InputOutputEvaluationCriteriaCreateOrConnectWithoutBaseCriteriaInput } from './input-output-evaluation-criteria-create-or-connect-without-base-criteria.input';
import { InputOutputEvaluationCriteriaWhereUniqueInput } from './input-output-evaluation-criteria-where-unique.input';

@InputType()
export class InputOutputEvaluationCriteriaCreateNestedOneWithoutBaseCriteriaInput {

    @Field(() => InputOutputEvaluationCriteriaCreateWithoutBaseCriteriaInput, {nullable:true})
    create?: InputOutputEvaluationCriteriaCreateWithoutBaseCriteriaInput;

    @Field(() => InputOutputEvaluationCriteriaCreateOrConnectWithoutBaseCriteriaInput, {nullable:true})
    connectOrCreate?: InputOutputEvaluationCriteriaCreateOrConnectWithoutBaseCriteriaInput;

    @Field(() => InputOutputEvaluationCriteriaWhereUniqueInput, {nullable:true})
    connect?: InputOutputEvaluationCriteriaWhereUniqueInput;
}
