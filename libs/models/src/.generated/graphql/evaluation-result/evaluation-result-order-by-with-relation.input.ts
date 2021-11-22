import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EvaluationCriteriaOrderByWithRelationInput } from '../evaluation-criteria/evaluation-criteria-order-by-with-relation.input';
import { InputOutputEvaluationResultOrderByWithRelationInput } from '../input-output-evaluation-result/input-output-evaluation-result-order-by-with-relation.input';
import { ProgrammingQuestionAnswerOrderByWithRelationInput } from '../programming-question-answer/programming-question-answer-order-by-with-relation.input';

@InputType()
export class EvaluationResultOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => EvaluationCriteriaOrderByWithRelationInput, {nullable:true})
    evaluationCriteria?: EvaluationCriteriaOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    evaluationCriteriaId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    evaulationPoints?: keyof typeof SortOrder;

    @Field(() => InputOutputEvaluationResultOrderByWithRelationInput, {nullable:true})
    inputOutputEvaulationResult?: InputOutputEvaluationResultOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    inputOutputEvaluationResultId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => ProgrammingQuestionAnswerOrderByWithRelationInput, {nullable:true})
    programmingQuestionAnswer?: ProgrammingQuestionAnswerOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    programmingQuestionAnswerId?: keyof typeof SortOrder;
}
