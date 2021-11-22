import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumAssessmentTypeFilter } from '../prisma/enum-assessment-type-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class AssessmentScalarWhereInput {

    @Field(() => [AssessmentScalarWhereInput], {nullable:true})
    AND?: Array<AssessmentScalarWhereInput>;

    @Field(() => [AssessmentScalarWhereInput], {nullable:true})
    OR?: Array<AssessmentScalarWhereInput>;

    @Field(() => [AssessmentScalarWhereInput], {nullable:true})
    NOT?: Array<AssessmentScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => EnumAssessmentTypeFilter, {nullable:true})
    assessmentType?: EnumAssessmentTypeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    startTime?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    endTime?: DateTimeNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    submitAfterEnd?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    totalPoints?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    classroomId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    competitionId?: StringNullableFilter;
}
