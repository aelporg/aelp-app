import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationCriteriaWhereUniqueInput } from './evaluation-criteria-where-unique.input';
import { EvaluationCriteriaUpdateWithoutProgrammingQuestionInput } from './evaluation-criteria-update-without-programming-question.input';

@InputType()
export class EvaluationCriteriaUpdateWithWhereUniqueWithoutProgrammingQuestionInput {

    @Field(() => EvaluationCriteriaWhereUniqueInput, {nullable:false})
    where!: EvaluationCriteriaWhereUniqueInput;

    @Field(() => EvaluationCriteriaUpdateWithoutProgrammingQuestionInput, {nullable:false})
    data!: EvaluationCriteriaUpdateWithoutProgrammingQuestionInput;
}
