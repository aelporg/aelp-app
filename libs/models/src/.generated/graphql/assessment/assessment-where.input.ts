import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumAssessmentTypeFilter } from '../prisma/enum-assessment-type-filter.input';
import { QuestionListRelationFilter } from '../question/question-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { ClassroomRelationFilter } from '../classroom/classroom-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { AssessmentAnswerListRelationFilter } from '../assessment-answer/assessment-answer-list-relation-filter.input';
import { CompetitionRelationFilter } from '../competition/competition-relation-filter.input';

@InputType()
export class AssessmentWhereInput {

    @Field(() => [AssessmentWhereInput], {nullable:true})
    AND?: Array<AssessmentWhereInput>;

    @Field(() => [AssessmentWhereInput], {nullable:true})
    OR?: Array<AssessmentWhereInput>;

    @Field(() => [AssessmentWhereInput], {nullable:true})
    NOT?: Array<AssessmentWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => EnumAssessmentTypeFilter, {nullable:true})
    assessmentType?: EnumAssessmentTypeFilter;

    @Field(() => QuestionListRelationFilter, {nullable:true})
    questions?: QuestionListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    startTime?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    endTime?: DateTimeNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    submitAfterEnd?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    totalPoints?: IntFilter;

    @Field(() => ClassroomRelationFilter, {nullable:true})
    classroom?: ClassroomRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    classroomId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => AssessmentAnswerListRelationFilter, {nullable:true})
    answers?: AssessmentAnswerListRelationFilter;

    @Field(() => CompetitionRelationFilter, {nullable:true})
    competition?: CompetitionRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    competitionId?: StringNullableFilter;
}
