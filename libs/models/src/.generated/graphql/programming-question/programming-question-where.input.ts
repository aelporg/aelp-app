import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumProgrammingQuestionTypeFilter } from '../prisma/enum-programming-question-type-filter.input';
import { SingleFileProgrammingQuestionRelationFilter } from '../single-file-programming-question/single-file-programming-question-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { MultipleFilesProgrammingQuestionRelationFilter } from '../multiple-files-programming-question/multiple-files-programming-question-relation-filter.input';
import { QuestionRelationFilter } from '../question/question-relation-filter.input';
import { EvaluationCriteriaListRelationFilter } from '../evaluation-criteria/evaluation-criteria-list-relation-filter.input';
import { PracticeProgrammingQuestionRelationFilter } from '../practice-programming-question/practice-programming-question-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ProgrammingQuestionWhereInput {

    @Field(() => [ProgrammingQuestionWhereInput], {nullable:true})
    AND?: Array<ProgrammingQuestionWhereInput>;

    @Field(() => [ProgrammingQuestionWhereInput], {nullable:true})
    OR?: Array<ProgrammingQuestionWhereInput>;

    @Field(() => [ProgrammingQuestionWhereInput], {nullable:true})
    NOT?: Array<ProgrammingQuestionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    statementMrkdwn?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    statementCompiled?: StringFilter;

    @Field(() => EnumProgrammingQuestionTypeFilter, {nullable:true})
    programmingQuestionType?: EnumProgrammingQuestionTypeFilter;

    @Field(() => SingleFileProgrammingQuestionRelationFilter, {nullable:true})
    singleFileProgrammingQuestion?: SingleFileProgrammingQuestionRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    singleFileProgrammingQuestionId?: StringNullableFilter;

    @Field(() => MultipleFilesProgrammingQuestionRelationFilter, {nullable:true})
    multipleFilesProgrammingQuestion?: MultipleFilesProgrammingQuestionRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    multipleFilesProgrammingQuestionId?: StringNullableFilter;

    @Field(() => QuestionRelationFilter, {nullable:true})
    baseQuestion?: QuestionRelationFilter;

    @Field(() => EvaluationCriteriaListRelationFilter, {nullable:true})
    evaluationCriterias?: EvaluationCriteriaListRelationFilter;

    @Field(() => PracticeProgrammingQuestionRelationFilter, {nullable:true})
    practice?: PracticeProgrammingQuestionRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
