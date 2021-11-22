import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { ProgrammingQuestionRelationFilter } from '../programming-question/programming-question-relation-filter.input';
import { LanguageListRelationFilter } from '../language/language-list-relation-filter.input';

@InputType()
export class SingleFileProgrammingQuestionWhereInput {

    @Field(() => [SingleFileProgrammingQuestionWhereInput], {nullable:true})
    AND?: Array<SingleFileProgrammingQuestionWhereInput>;

    @Field(() => [SingleFileProgrammingQuestionWhereInput], {nullable:true})
    OR?: Array<SingleFileProgrammingQuestionWhereInput>;

    @Field(() => [SingleFileProgrammingQuestionWhereInput], {nullable:true})
    NOT?: Array<SingleFileProgrammingQuestionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => ProgrammingQuestionRelationFilter, {nullable:true})
    baseProgrammingQuestion?: ProgrammingQuestionRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    defaultCode?: StringFilter;

    @Field(() => LanguageListRelationFilter, {nullable:true})
    allowedLanguages?: LanguageListRelationFilter;
}
