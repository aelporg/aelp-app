import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ProgrammingQuestionAnswerScalarWhereWithAggregatesInput {

    @Field(() => [ProgrammingQuestionAnswerScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProgrammingQuestionAnswerScalarWhereWithAggregatesInput>;

    @Field(() => [ProgrammingQuestionAnswerScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProgrammingQuestionAnswerScalarWhereWithAggregatesInput>;

    @Field(() => [ProgrammingQuestionAnswerScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProgrammingQuestionAnswerScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    envirnmentId?: StringWithAggregatesFilter;
}
