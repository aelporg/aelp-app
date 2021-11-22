import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationCriteriaWhereUniqueInput } from './evaluation-criteria-where-unique.input';
import { EvaluationCriteriaUpdateWithoutProgrammingQuestionInput } from './evaluation-criteria-update-without-programming-question.input';
import { EvaluationCriteriaCreateWithoutProgrammingQuestionInput } from './evaluation-criteria-create-without-programming-question.input';

@InputType()
export class EvaluationCriteriaUpsertWithWhereUniqueWithoutProgrammingQuestionInput {

    @Field(() => EvaluationCriteriaWhereUniqueInput, {nullable:false})
    where!: EvaluationCriteriaWhereUniqueInput;

    @Field(() => EvaluationCriteriaUpdateWithoutProgrammingQuestionInput, {nullable:false})
    update!: EvaluationCriteriaUpdateWithoutProgrammingQuestionInput;

    @Field(() => EvaluationCriteriaCreateWithoutProgrammingQuestionInput, {nullable:false})
    create!: EvaluationCriteriaCreateWithoutProgrammingQuestionInput;
}
