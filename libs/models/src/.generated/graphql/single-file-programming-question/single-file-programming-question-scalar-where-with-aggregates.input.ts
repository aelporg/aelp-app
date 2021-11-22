import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class SingleFileProgrammingQuestionScalarWhereWithAggregatesInput {

    @Field(() => [SingleFileProgrammingQuestionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SingleFileProgrammingQuestionScalarWhereWithAggregatesInput>;

    @Field(() => [SingleFileProgrammingQuestionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SingleFileProgrammingQuestionScalarWhereWithAggregatesInput>;

    @Field(() => [SingleFileProgrammingQuestionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SingleFileProgrammingQuestionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    defaultCode?: StringWithAggregatesFilter;
}
