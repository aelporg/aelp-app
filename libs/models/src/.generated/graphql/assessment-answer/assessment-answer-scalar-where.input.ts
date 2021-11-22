import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class AssessmentAnswerScalarWhereInput {

    @Field(() => [AssessmentAnswerScalarWhereInput], {nullable:true})
    AND?: Array<AssessmentAnswerScalarWhereInput>;

    @Field(() => [AssessmentAnswerScalarWhereInput], {nullable:true})
    OR?: Array<AssessmentAnswerScalarWhereInput>;

    @Field(() => [AssessmentAnswerScalarWhereInput], {nullable:true})
    NOT?: Array<AssessmentAnswerScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    assessmentId?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    reviewed?: BoolFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    submittedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    recPoints?: IntFilter;
}
