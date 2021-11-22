import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class AssessmentAnswerScalarWhereWithAggregatesInput {

    @Field(() => [AssessmentAnswerScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AssessmentAnswerScalarWhereWithAggregatesInput>;

    @Field(() => [AssessmentAnswerScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AssessmentAnswerScalarWhereWithAggregatesInput>;

    @Field(() => [AssessmentAnswerScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AssessmentAnswerScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    assessmentId?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    reviewed?: BoolWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    submittedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    recPoints?: IntWithAggregatesFilter;
}
