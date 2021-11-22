import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumEvaluationCriteriaTypeFilter } from '../prisma/enum-evaluation-criteria-type-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class EvaluationCriteriaScalarWhereInput {

    @Field(() => [EvaluationCriteriaScalarWhereInput], {nullable:true})
    AND?: Array<EvaluationCriteriaScalarWhereInput>;

    @Field(() => [EvaluationCriteriaScalarWhereInput], {nullable:true})
    OR?: Array<EvaluationCriteriaScalarWhereInput>;

    @Field(() => [EvaluationCriteriaScalarWhereInput], {nullable:true})
    NOT?: Array<EvaluationCriteriaScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => EnumEvaluationCriteriaTypeFilter, {nullable:true})
    type?: EnumEvaluationCriteriaTypeFilter;

    @Field(() => IntFilter, {nullable:true})
    totalPoints?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    inputOutputEvalCritId?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    requiredToPass?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    programmingQuestionId?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    hidden?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
