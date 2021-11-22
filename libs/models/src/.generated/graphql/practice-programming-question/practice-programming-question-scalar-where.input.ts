import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumDifficultyFilter } from '../prisma/enum-difficulty-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class PracticeProgrammingQuestionScalarWhereInput {

    @Field(() => [PracticeProgrammingQuestionScalarWhereInput], {nullable:true})
    AND?: Array<PracticeProgrammingQuestionScalarWhereInput>;

    @Field(() => [PracticeProgrammingQuestionScalarWhereInput], {nullable:true})
    OR?: Array<PracticeProgrammingQuestionScalarWhereInput>;

    @Field(() => [PracticeProgrammingQuestionScalarWhereInput], {nullable:true})
    NOT?: Array<PracticeProgrammingQuestionScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    questionId?: StringFilter;

    @Field(() => EnumDifficultyFilter, {nullable:true})
    diffculty?: EnumDifficultyFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    classroomId?: StringNullableFilter;
}
