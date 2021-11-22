import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumQuestionTypeWithAggregatesFilter } from '../prisma/enum-question-type-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class QuestionScalarWhereWithAggregatesInput {

    @Field(() => [QuestionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<QuestionScalarWhereWithAggregatesInput>;

    @Field(() => [QuestionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<QuestionScalarWhereWithAggregatesInput>;

    @Field(() => [QuestionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<QuestionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => EnumQuestionTypeWithAggregatesFilter, {nullable:true})
    questionType?: EnumQuestionTypeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    points?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    multipleChoiceQuestionId?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    programmingQuestionId?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    assessmentId?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
