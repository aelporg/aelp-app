import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class MultipleChoiceQuestionAnswerScalarWhereWithAggregatesInput {

    @Field(() => [MultipleChoiceQuestionAnswerScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MultipleChoiceQuestionAnswerScalarWhereWithAggregatesInput>;

    @Field(() => [MultipleChoiceQuestionAnswerScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MultipleChoiceQuestionAnswerScalarWhereWithAggregatesInput>;

    @Field(() => [MultipleChoiceQuestionAnswerScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MultipleChoiceQuestionAnswerScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    questionChoiceId?: StringWithAggregatesFilter;
}
