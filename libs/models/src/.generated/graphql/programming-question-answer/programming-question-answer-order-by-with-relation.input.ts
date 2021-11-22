import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { QuestionAnswerOrderByWithRelationInput } from '../question-answer/question-answer-order-by-with-relation.input';
import { EnvironmentOrderByWithRelationInput } from '../environment/environment-order-by-with-relation.input';
import { EvaluationResultOrderByRelationAggregateInput } from '../evaluation-result/evaluation-result-order-by-relation-aggregate.input';

@InputType()
export class ProgrammingQuestionAnswerOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => QuestionAnswerOrderByWithRelationInput, {nullable:true})
    baseAnswer?: QuestionAnswerOrderByWithRelationInput;

    @Field(() => EnvironmentOrderByWithRelationInput, {nullable:true})
    envirnment?: EnvironmentOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    envirnmentId?: keyof typeof SortOrder;

    @Field(() => EvaluationResultOrderByRelationAggregateInput, {nullable:true})
    evaluationResults?: EvaluationResultOrderByRelationAggregateInput;
}
