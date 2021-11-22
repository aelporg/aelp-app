import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationCriteriaType } from '../prisma/evaluation-criteria-type.enum';
import { Int } from '@nestjs/graphql';
import { InputOutputEvaluationCriteriaCreateNestedOneWithoutBaseCriteriaInput } from '../input-output-evaluation-criteria/input-output-evaluation-criteria-create-nested-one-without-base-criteria.input';
import { ProgrammingQuestionCreateNestedOneWithoutEvaluationCriteriasInput } from '../programming-question/programming-question-create-nested-one-without-evaluation-criterias.input';

@InputType()
export class EvaluationCriteriaCreateWithoutResultsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => EvaluationCriteriaType, {nullable:false})
    type!: keyof typeof EvaluationCriteriaType;

    @Field(() => Int, {nullable:false})
    totalPoints!: number;

    @Field(() => Boolean, {nullable:true})
    requiredToPass?: boolean;

    @Field(() => Boolean, {nullable:true})
    hidden?: boolean;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => InputOutputEvaluationCriteriaCreateNestedOneWithoutBaseCriteriaInput, {nullable:true})
    inputOutputEvalCrit?: InputOutputEvaluationCriteriaCreateNestedOneWithoutBaseCriteriaInput;

    @Field(() => ProgrammingQuestionCreateNestedOneWithoutEvaluationCriteriasInput, {nullable:false})
    programmingQuestion!: ProgrammingQuestionCreateNestedOneWithoutEvaluationCriteriasInput;
}
