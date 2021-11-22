import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { QuestionOrderByRelationAggregateInput } from '../question/question-order-by-relation-aggregate.input';
import { ClassroomOrderByWithRelationInput } from '../classroom/classroom-order-by-with-relation.input';
import { AssessmentAnswerOrderByRelationAggregateInput } from '../assessment-answer/assessment-answer-order-by-relation-aggregate.input';
import { CompetitionOrderByWithRelationInput } from '../competition/competition-order-by-with-relation.input';

@InputType()
export class AssessmentOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assessmentType?: keyof typeof SortOrder;

    @Field(() => QuestionOrderByRelationAggregateInput, {nullable:true})
    questions?: QuestionOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    startTime?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    endTime?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    submitAfterEnd?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    totalPoints?: keyof typeof SortOrder;

    @Field(() => ClassroomOrderByWithRelationInput, {nullable:true})
    classroom?: ClassroomOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    classroomId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => AssessmentAnswerOrderByRelationAggregateInput, {nullable:true})
    answers?: AssessmentAnswerOrderByRelationAggregateInput;

    @Field(() => CompetitionOrderByWithRelationInput, {nullable:true})
    competition?: CompetitionOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    competitionId?: keyof typeof SortOrder;
}
