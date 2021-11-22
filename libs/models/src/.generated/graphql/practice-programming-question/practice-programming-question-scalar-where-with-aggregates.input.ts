import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumDifficultyWithAggregatesFilter } from '../prisma/enum-difficulty-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class PracticeProgrammingQuestionScalarWhereWithAggregatesInput {

    @Field(() => [PracticeProgrammingQuestionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PracticeProgrammingQuestionScalarWhereWithAggregatesInput>;

    @Field(() => [PracticeProgrammingQuestionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PracticeProgrammingQuestionScalarWhereWithAggregatesInput>;

    @Field(() => [PracticeProgrammingQuestionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PracticeProgrammingQuestionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    questionId?: StringWithAggregatesFilter;

    @Field(() => EnumDifficultyWithAggregatesFilter, {nullable:true})
    diffculty?: EnumDifficultyWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    classroomId?: StringNullableWithAggregatesFilter;
}
