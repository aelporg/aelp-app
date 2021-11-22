import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { QuestionAnswerRelationFilter } from '../question-answer/question-answer-relation-filter.input';
import { EnvironmentRelationFilter } from '../environment/environment-relation-filter.input';
import { EvaluationResultListRelationFilter } from '../evaluation-result/evaluation-result-list-relation-filter.input';

@InputType()
export class ProgrammingQuestionAnswerWhereInput {

    @Field(() => [ProgrammingQuestionAnswerWhereInput], {nullable:true})
    AND?: Array<ProgrammingQuestionAnswerWhereInput>;

    @Field(() => [ProgrammingQuestionAnswerWhereInput], {nullable:true})
    OR?: Array<ProgrammingQuestionAnswerWhereInput>;

    @Field(() => [ProgrammingQuestionAnswerWhereInput], {nullable:true})
    NOT?: Array<ProgrammingQuestionAnswerWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => QuestionAnswerRelationFilter, {nullable:true})
    baseAnswer?: QuestionAnswerRelationFilter;

    @Field(() => EnvironmentRelationFilter, {nullable:true})
    envirnment?: EnvironmentRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    envirnmentId?: StringFilter;

    @Field(() => EvaluationResultListRelationFilter, {nullable:true})
    evaluationResults?: EvaluationResultListRelationFilter;
}
