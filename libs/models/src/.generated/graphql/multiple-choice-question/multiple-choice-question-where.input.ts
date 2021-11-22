import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { MultipleChoiceQuestionChoiceListRelationFilter } from '../multiple-choice-question-choice/multiple-choice-question-choice-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { QuestionRelationFilter } from '../question/question-relation-filter.input';

@InputType()
export class MultipleChoiceQuestionWhereInput {

    @Field(() => [MultipleChoiceQuestionWhereInput], {nullable:true})
    AND?: Array<MultipleChoiceQuestionWhereInput>;

    @Field(() => [MultipleChoiceQuestionWhereInput], {nullable:true})
    OR?: Array<MultipleChoiceQuestionWhereInput>;

    @Field(() => [MultipleChoiceQuestionWhereInput], {nullable:true})
    NOT?: Array<MultipleChoiceQuestionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => MultipleChoiceQuestionChoiceListRelationFilter, {nullable:true})
    choices?: MultipleChoiceQuestionChoiceListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => QuestionRelationFilter, {nullable:true})
    baseQuestion?: QuestionRelationFilter;
}
