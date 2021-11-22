import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumDifficultyFilter } from '../prisma/enum-difficulty-filter.input';
import { ProgrammingQuestionRelationFilter } from '../programming-question/programming-question-relation-filter.input';
import { ClassroomRelationFilter } from '../classroom/classroom-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class PracticeProgrammingQuestionWhereInput {

    @Field(() => [PracticeProgrammingQuestionWhereInput], {nullable:true})
    AND?: Array<PracticeProgrammingQuestionWhereInput>;

    @Field(() => [PracticeProgrammingQuestionWhereInput], {nullable:true})
    OR?: Array<PracticeProgrammingQuestionWhereInput>;

    @Field(() => [PracticeProgrammingQuestionWhereInput], {nullable:true})
    NOT?: Array<PracticeProgrammingQuestionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    questionId?: StringFilter;

    @Field(() => EnumDifficultyFilter, {nullable:true})
    diffculty?: EnumDifficultyFilter;

    @Field(() => ProgrammingQuestionRelationFilter, {nullable:true})
    question?: ProgrammingQuestionRelationFilter;

    @Field(() => ClassroomRelationFilter, {nullable:true})
    classroom?: ClassroomRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    classroomId?: StringNullableFilter;
}
