import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { SortOrder } from '../prisma/sort-order.enum';
import { AssessmentOrderByWithRelationInput } from '../assessment/assessment-order-by-with-relation.input';
import { QuestionAnswerOrderByRelationAggregateInput } from '../question-answer/question-answer-order-by-relation-aggregate.input';

@InputType()
export class AssessmentAnswerOrderByWithRelationInput {

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => AssessmentOrderByWithRelationInput, {nullable:true})
    assessment?: AssessmentOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    assessmentId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reviewed?: keyof typeof SortOrder;

    @Field(() => QuestionAnswerOrderByRelationAggregateInput, {nullable:true})
    questionsSubmissions?: QuestionAnswerOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    submittedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    recPoints?: keyof typeof SortOrder;
}
