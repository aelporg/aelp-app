import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationCriteriaType } from '../prisma/evaluation-criteria-type.enum';
import { Int } from '@nestjs/graphql';
import { EvaluationResultUncheckedCreateNestedManyWithoutEvaluationCriteriaInput } from '../evaluation-result/evaluation-result-unchecked-create-nested-many-without-evaluation-criteria.input';

@InputType()
export class EvaluationCriteriaUncheckedCreateWithoutProgrammingQuestionInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => EvaluationCriteriaType, {nullable:false})
    type!: keyof typeof EvaluationCriteriaType;

    @Field(() => Int, {nullable:false})
    totalPoints!: number;

    @Field(() => String, {nullable:true})
    inputOutputEvalCritId?: string;

    @Field(() => Boolean, {nullable:true})
    requiredToPass?: boolean;

    @Field(() => Boolean, {nullable:true})
    hidden?: boolean;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => EvaluationResultUncheckedCreateNestedManyWithoutEvaluationCriteriaInput, {nullable:true})
    results?: EvaluationResultUncheckedCreateNestedManyWithoutEvaluationCriteriaInput;
}
