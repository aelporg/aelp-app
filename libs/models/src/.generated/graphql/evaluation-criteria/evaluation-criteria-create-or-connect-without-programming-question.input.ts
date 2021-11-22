import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationCriteriaWhereUniqueInput } from './evaluation-criteria-where-unique.input';
import { EvaluationCriteriaCreateWithoutProgrammingQuestionInput } from './evaluation-criteria-create-without-programming-question.input';

@InputType()
export class EvaluationCriteriaCreateOrConnectWithoutProgrammingQuestionInput {

    @Field(() => EvaluationCriteriaWhereUniqueInput, {nullable:false})
    where!: EvaluationCriteriaWhereUniqueInput;

    @Field(() => EvaluationCriteriaCreateWithoutProgrammingQuestionInput, {nullable:false})
    create!: EvaluationCriteriaCreateWithoutProgrammingQuestionInput;
}
