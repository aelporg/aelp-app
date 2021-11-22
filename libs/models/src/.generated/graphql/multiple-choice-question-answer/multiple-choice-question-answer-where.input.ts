import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { MultipleChoiceQuestionChoiceRelationFilter } from '../multiple-choice-question-choice/multiple-choice-question-choice-relation-filter.input';
import { QuestionAnswerRelationFilter } from '../question-answer/question-answer-relation-filter.input';

@InputType()
export class MultipleChoiceQuestionAnswerWhereInput {

    @Field(() => [MultipleChoiceQuestionAnswerWhereInput], {nullable:true})
    AND?: Array<MultipleChoiceQuestionAnswerWhereInput>;

    @Field(() => [MultipleChoiceQuestionAnswerWhereInput], {nullable:true})
    OR?: Array<MultipleChoiceQuestionAnswerWhereInput>;

    @Field(() => [MultipleChoiceQuestionAnswerWhereInput], {nullable:true})
    NOT?: Array<MultipleChoiceQuestionAnswerWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => MultipleChoiceQuestionChoiceRelationFilter, {nullable:true})
    questionChoice?: MultipleChoiceQuestionChoiceRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    questionChoiceId?: StringFilter;

    @Field(() => QuestionAnswerRelationFilter, {nullable:true})
    baseAnswer?: QuestionAnswerRelationFilter;
}
