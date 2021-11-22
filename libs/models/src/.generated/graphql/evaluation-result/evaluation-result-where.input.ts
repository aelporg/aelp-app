import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EvaluationCriteriaRelationFilter } from '../evaluation-criteria/evaluation-criteria-relation-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { InputOutputEvaluationResultRelationFilter } from '../input-output-evaluation-result/input-output-evaluation-result-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProgrammingQuestionAnswerRelationFilter } from '../programming-question-answer/programming-question-answer-relation-filter.input';

@InputType()
export class EvaluationResultWhereInput {

    @Field(() => [EvaluationResultWhereInput], {nullable:true})
    AND?: Array<EvaluationResultWhereInput>;

    @Field(() => [EvaluationResultWhereInput], {nullable:true})
    OR?: Array<EvaluationResultWhereInput>;

    @Field(() => [EvaluationResultWhereInput], {nullable:true})
    NOT?: Array<EvaluationResultWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EvaluationCriteriaRelationFilter, {nullable:true})
    evaluationCriteria?: EvaluationCriteriaRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    evaluationCriteriaId?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    evaulationPoints?: FloatFilter;

    @Field(() => InputOutputEvaluationResultRelationFilter, {nullable:true})
    inputOutputEvaulationResult?: InputOutputEvaluationResultRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    inputOutputEvaluationResultId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => ProgrammingQuestionAnswerRelationFilter, {nullable:true})
    programmingQuestionAnswer?: ProgrammingQuestionAnswerRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    programmingQuestionAnswerId?: StringFilter;
}
