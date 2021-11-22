import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationCriteriaCreateWithoutResultsInput } from './evaluation-criteria-create-without-results.input';
import { EvaluationCriteriaCreateOrConnectWithoutResultsInput } from './evaluation-criteria-create-or-connect-without-results.input';
import { EvaluationCriteriaUpsertWithoutResultsInput } from './evaluation-criteria-upsert-without-results.input';
import { EvaluationCriteriaWhereUniqueInput } from './evaluation-criteria-where-unique.input';
import { EvaluationCriteriaUpdateWithoutResultsInput } from './evaluation-criteria-update-without-results.input';

@InputType()
export class EvaluationCriteriaUpdateOneRequiredWithoutResultsInput {

    @Field(() => EvaluationCriteriaCreateWithoutResultsInput, {nullable:true})
    create?: EvaluationCriteriaCreateWithoutResultsInput;

    @Field(() => EvaluationCriteriaCreateOrConnectWithoutResultsInput, {nullable:true})
    connectOrCreate?: EvaluationCriteriaCreateOrConnectWithoutResultsInput;

    @Field(() => EvaluationCriteriaUpsertWithoutResultsInput, {nullable:true})
    upsert?: EvaluationCriteriaUpsertWithoutResultsInput;

    @Field(() => EvaluationCriteriaWhereUniqueInput, {nullable:true})
    connect?: EvaluationCriteriaWhereUniqueInput;

    @Field(() => EvaluationCriteriaUpdateWithoutResultsInput, {nullable:true})
    update?: EvaluationCriteriaUpdateWithoutResultsInput;
}
