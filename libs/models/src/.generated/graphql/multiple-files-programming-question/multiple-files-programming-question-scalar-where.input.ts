import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class MultipleFilesProgrammingQuestionScalarWhereInput {

    @Field(() => [MultipleFilesProgrammingQuestionScalarWhereInput], {nullable:true})
    AND?: Array<MultipleFilesProgrammingQuestionScalarWhereInput>;

    @Field(() => [MultipleFilesProgrammingQuestionScalarWhereInput], {nullable:true})
    OR?: Array<MultipleFilesProgrammingQuestionScalarWhereInput>;

    @Field(() => [MultipleFilesProgrammingQuestionScalarWhereInput], {nullable:true})
    NOT?: Array<MultipleFilesProgrammingQuestionScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    languageId?: StringFilter;
}
