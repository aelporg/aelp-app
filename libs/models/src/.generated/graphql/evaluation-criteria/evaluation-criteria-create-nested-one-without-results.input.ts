import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationCriteriaCreateWithoutResultsInput } from './evaluation-criteria-create-without-results.input';
import { EvaluationCriteriaCreateOrConnectWithoutResultsInput } from './evaluation-criteria-create-or-connect-without-results.input';
import { EvaluationCriteriaWhereUniqueInput } from './evaluation-criteria-where-unique.input';

@InputType()
export class EvaluationCriteriaCreateNestedOneWithoutResultsInput {

    @Field(() => EvaluationCriteriaCreateWithoutResultsInput, {nullable:true})
    create?: EvaluationCriteriaCreateWithoutResultsInput;

    @Field(() => EvaluationCriteriaCreateOrConnectWithoutResultsInput, {nullable:true})
    connectOrCreate?: EvaluationCriteriaCreateOrConnectWithoutResultsInput;

    @Field(() => EvaluationCriteriaWhereUniqueInput, {nullable:true})
    connect?: EvaluationCriteriaWhereUniqueInput;
}
