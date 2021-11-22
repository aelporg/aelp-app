import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class MultipleChoiceQuestionScalarWhereWithAggregatesInput {

    @Field(() => [MultipleChoiceQuestionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MultipleChoiceQuestionScalarWhereWithAggregatesInput>;

    @Field(() => [MultipleChoiceQuestionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MultipleChoiceQuestionScalarWhereWithAggregatesInput>;

    @Field(() => [MultipleChoiceQuestionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MultipleChoiceQuestionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
