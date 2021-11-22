import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { LanguageRelationFilter } from '../language/language-relation-filter.input';
import { ProgrammingQuestionRelationFilter } from '../programming-question/programming-question-relation-filter.input';
import { FileListRelationFilter } from '../file/file-list-relation-filter.input';

@InputType()
export class MultipleFilesProgrammingQuestionWhereInput {

    @Field(() => [MultipleFilesProgrammingQuestionWhereInput], {nullable:true})
    AND?: Array<MultipleFilesProgrammingQuestionWhereInput>;

    @Field(() => [MultipleFilesProgrammingQuestionWhereInput], {nullable:true})
    OR?: Array<MultipleFilesProgrammingQuestionWhereInput>;

    @Field(() => [MultipleFilesProgrammingQuestionWhereInput], {nullable:true})
    NOT?: Array<MultipleFilesProgrammingQuestionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => LanguageRelationFilter, {nullable:true})
    language?: LanguageRelationFilter;

    @Field(() => ProgrammingQuestionRelationFilter, {nullable:true})
    baseProgrammingQuestion?: ProgrammingQuestionRelationFilter;

    @Field(() => FileListRelationFilter, {nullable:true})
    defaultFiles?: FileListRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    languageId?: StringFilter;
}
