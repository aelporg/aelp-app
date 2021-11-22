import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { MultipleFilesProgrammingQuestionListRelationFilter } from '../multiple-files-programming-question/multiple-files-programming-question-list-relation-filter.input';
import { EnvironmentRelationFilter } from '../environment/environment-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class FileWhereInput {

    @Field(() => [FileWhereInput], {nullable:true})
    AND?: Array<FileWhereInput>;

    @Field(() => [FileWhereInput], {nullable:true})
    OR?: Array<FileWhereInput>;

    @Field(() => [FileWhereInput], {nullable:true})
    NOT?: Array<FileWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    extension?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    data?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => MultipleFilesProgrammingQuestionListRelationFilter, {nullable:true})
    multipleFilesProgrammingQuestion?: MultipleFilesProgrammingQuestionListRelationFilter;

    @Field(() => EnvironmentRelationFilter, {nullable:true})
    environment?: EnvironmentRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    environmentId?: StringNullableFilter;
}
