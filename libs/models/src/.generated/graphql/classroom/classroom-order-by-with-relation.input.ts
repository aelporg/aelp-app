import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ClassroomMemberOrderByRelationAggregateInput } from '../classroom-member/classroom-member-order-by-relation-aggregate.input';
import { AssessmentOrderByRelationAggregateInput } from '../assessment/assessment-order-by-relation-aggregate.input';
import { PracticeProgrammingQuestionOrderByRelationAggregateInput } from '../practice-programming-question/practice-programming-question-order-by-relation-aggregate.input';

@InputType()
export class ClassroomOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    subject?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    section?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    inviteCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => ClassroomMemberOrderByRelationAggregateInput, {nullable:true})
    members?: ClassroomMemberOrderByRelationAggregateInput;

    @Field(() => AssessmentOrderByRelationAggregateInput, {nullable:true})
    assessments?: AssessmentOrderByRelationAggregateInput;

    @Field(() => PracticeProgrammingQuestionOrderByRelationAggregateInput, {nullable:true})
    practiceProgrammingQuestions?: PracticeProgrammingQuestionOrderByRelationAggregateInput;
}
