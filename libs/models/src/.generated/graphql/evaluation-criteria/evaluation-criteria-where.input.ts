import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumEvaluationCriteriaTypeFilter } from '../prisma/enum-evaluation-criteria-type-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { InputOutputEvaluationCriteriaRelationFilter } from '../input-output-evaluation-criteria/input-output-evaluation-criteria-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { ProgrammingQuestionRelationFilter } from '../programming-question/programming-question-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EvaluationResultListRelationFilter } from '../evaluation-result/evaluation-result-list-relation-filter.input';

@InputType()
export class EvaluationCriteriaWhereInput {

    @Field(() => [EvaluationCriteriaWhereInput], {nullable:true})
    AND?: Array<EvaluationCriteriaWhereInput>;

    @Field(() => [EvaluationCriteriaWhereInput], {nullable:true})
    OR?: Array<EvaluationCriteriaWhereInput>;

    @Field(() => [EvaluationCriteriaWhereInput], {nullable:true})
    NOT?: Array<EvaluationCriteriaWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => EnumEvaluationCriteriaTypeFilter, {nullable:true})
    type?: EnumEvaluationCriteriaTypeFilter;

    @Field(() => IntFilter, {nullable:true})
    totalPoints?: IntFilter;

    @Field(() => InputOutputEvaluationCriteriaRelationFilter, {nullable:true})
    inputOutputEvalCrit?: InputOutputEvaluationCriteriaRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    inputOutputEvalCritId?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    requiredToPass?: BoolFilter;

    @Field(() => ProgrammingQuestionRelationFilter, {nullable:true})
    programmingQuestion?: ProgrammingQuestionRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    programmingQuestionId?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    hidden?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => EvaluationResultListRelationFilter, {nullable:true})
    results?: EvaluationResultListRelationFilter;
}
