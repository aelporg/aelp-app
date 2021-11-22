import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class MultipleChoiceQuestionChoiceScalarWhereInput {

    @Field(() => [MultipleChoiceQuestionChoiceScalarWhereInput], {nullable:true})
    AND?: Array<MultipleChoiceQuestionChoiceScalarWhereInput>;

    @Field(() => [MultipleChoiceQuestionChoiceScalarWhereInput], {nullable:true})
    OR?: Array<MultipleChoiceQuestionChoiceScalarWhereInput>;

    @Field(() => [MultipleChoiceQuestionChoiceScalarWhereInput], {nullable:true})
    NOT?: Array<MultipleChoiceQuestionChoiceScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    choice?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    questionId?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    correct?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
