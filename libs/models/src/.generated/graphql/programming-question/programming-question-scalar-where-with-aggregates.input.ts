import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumProgrammingQuestionTypeWithAggregatesFilter } from '../prisma/enum-programming-question-type-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ProgrammingQuestionScalarWhereWithAggregatesInput {

    @Field(() => [ProgrammingQuestionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProgrammingQuestionScalarWhereWithAggregatesInput>;

    @Field(() => [ProgrammingQuestionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProgrammingQuestionScalarWhereWithAggregatesInput>;

    @Field(() => [ProgrammingQuestionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProgrammingQuestionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    statementMrkdwn?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    statementCompiled?: StringWithAggregatesFilter;

    @Field(() => EnumProgrammingQuestionTypeWithAggregatesFilter, {nullable:true})
    programmingQuestionType?: EnumProgrammingQuestionTypeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    singleFileProgrammingQuestionId?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    multipleFilesProgrammingQuestionId?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
