import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { SingleFileProgrammingQuestionListRelationFilter } from '../single-file-programming-question/single-file-programming-question-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { MultipleFilesProgrammingQuestionListRelationFilter } from '../multiple-files-programming-question/multiple-files-programming-question-list-relation-filter.input';

@InputType()
export class LanguageWhereInput {

    @Field(() => [LanguageWhereInput], {nullable:true})
    AND?: Array<LanguageWhereInput>;

    @Field(() => [LanguageWhereInput], {nullable:true})
    OR?: Array<LanguageWhereInput>;

    @Field(() => [LanguageWhereInput], {nullable:true})
    NOT?: Array<LanguageWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    extension?: StringFilter;

    @Field(() => SingleFileProgrammingQuestionListRelationFilter, {nullable:true})
    singleFileQuestions?: SingleFileProgrammingQuestionListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => MultipleFilesProgrammingQuestionListRelationFilter, {nullable:true})
    MultipleFilesProgrammingQuestion?: MultipleFilesProgrammingQuestionListRelationFilter;
}
