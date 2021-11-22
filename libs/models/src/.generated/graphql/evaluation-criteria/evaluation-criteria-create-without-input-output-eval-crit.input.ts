import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationCriteriaType } from '../prisma/evaluation-criteria-type.enum';
import { Int } from '@nestjs/graphql';
import { ProgrammingQuestionCreateNestedOneWithoutEvaluationCriteriasInput } from '../programming-question/programming-question-create-nested-one-without-evaluation-criterias.input';
import { EvaluationResultCreateNestedManyWithoutEvaluationCriteriaInput } from '../evaluation-result/evaluation-result-create-nested-many-without-evaluation-criteria.input';

@InputType()
export class EvaluationCriteriaCreateWithoutInputOutputEvalCritInput {

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

    @Field(() => ProgrammingQuestionCreateNestedOneWithoutEvaluationCriteriasInput, {nullable:false})
    programmingQuestion!: ProgrammingQuestionCreateNestedOneWithoutEvaluationCriteriasInput;

    @Field(() => EvaluationResultCreateNestedManyWithoutEvaluationCriteriaInput, {nullable:true})
    results?: EvaluationResultCreateNestedManyWithoutEvaluationCriteriaInput;
}
