import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class MultipleChoiceQuestionAnswerScalarWhereInput {

    @Field(() => [MultipleChoiceQuestionAnswerScalarWhereInput], {nullable:true})
    AND?: Array<MultipleChoiceQuestionAnswerScalarWhereInput>;

    @Field(() => [MultipleChoiceQuestionAnswerScalarWhereInput], {nullable:true})
    OR?: Array<MultipleChoiceQuestionAnswerScalarWhereInput>;

    @Field(() => [MultipleChoiceQuestionAnswerScalarWhereInput], {nullable:true})
    NOT?: Array<MultipleChoiceQuestionAnswerScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    questionChoiceId?: StringFilter;
}
