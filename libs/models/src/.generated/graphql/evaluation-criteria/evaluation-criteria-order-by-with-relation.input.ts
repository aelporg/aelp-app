import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { InputOutputEvaluationCriteriaOrderByWithRelationInput } from '../input-output-evaluation-criteria/input-output-evaluation-criteria-order-by-with-relation.input';
import { ProgrammingQuestionOrderByWithRelationInput } from '../programming-question/programming-question-order-by-with-relation.input';
import { EvaluationResultOrderByRelationAggregateInput } from '../evaluation-result/evaluation-result-order-by-relation-aggregate.input';

@InputType()
export class EvaluationCriteriaOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    totalPoints?: keyof typeof SortOrder;

    @Field(() => InputOutputEvaluationCriteriaOrderByWithRelationInput, {nullable:true})
    inputOutputEvalCrit?: InputOutputEvaluationCriteriaOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    inputOutputEvalCritId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    requiredToPass?: keyof typeof SortOrder;

    @Field(() => ProgrammingQuestionOrderByWithRelationInput, {nullable:true})
    programmingQuestion?: ProgrammingQuestionOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    programmingQuestionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hidden?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => EvaluationResultOrderByRelationAggregateInput, {nullable:true})
    results?: EvaluationResultOrderByRelationAggregateInput;
}
