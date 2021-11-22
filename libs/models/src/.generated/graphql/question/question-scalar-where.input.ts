import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumQuestionTypeFilter } from '../prisma/enum-question-type-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class QuestionScalarWhereInput {

    @Field(() => [QuestionScalarWhereInput], {nullable:true})
    AND?: Array<QuestionScalarWhereInput>;

    @Field(() => [QuestionScalarWhereInput], {nullable:true})
    OR?: Array<QuestionScalarWhereInput>;

    @Field(() => [QuestionScalarWhereInput], {nullable:true})
    NOT?: Array<QuestionScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumQuestionTypeFilter, {nullable:true})
    questionType?: EnumQuestionTypeFilter;

    @Field(() => IntFilter, {nullable:true})
    points?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    multipleChoiceQuestionId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    programmingQuestionId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    assessmentId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
