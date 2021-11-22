import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class QuestionAnswerScalarWhereInput {

    @Field(() => [QuestionAnswerScalarWhereInput], {nullable:true})
    AND?: Array<QuestionAnswerScalarWhereInput>;

    @Field(() => [QuestionAnswerScalarWhereInput], {nullable:true})
    OR?: Array<QuestionAnswerScalarWhereInput>;

    @Field(() => [QuestionAnswerScalarWhereInput], {nullable:true})
    NOT?: Array<QuestionAnswerScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    questionId?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    multipleChoiceQuestionAnswerId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    programmingQuestionAnswerId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    assessmentSubmissionId?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    points?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;
}
