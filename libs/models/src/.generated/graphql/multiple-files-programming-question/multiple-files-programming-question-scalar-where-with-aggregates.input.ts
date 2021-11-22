import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class MultipleFilesProgrammingQuestionScalarWhereWithAggregatesInput {

    @Field(() => [MultipleFilesProgrammingQuestionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MultipleFilesProgrammingQuestionScalarWhereWithAggregatesInput>;

    @Field(() => [MultipleFilesProgrammingQuestionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MultipleFilesProgrammingQuestionScalarWhereWithAggregatesInput>;

    @Field(() => [MultipleFilesProgrammingQuestionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MultipleFilesProgrammingQuestionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    languageId?: StringWithAggregatesFilter;
}
