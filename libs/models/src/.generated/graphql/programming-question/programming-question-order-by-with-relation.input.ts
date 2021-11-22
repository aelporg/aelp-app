import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SingleFileProgrammingQuestionOrderByWithRelationInput } from '../single-file-programming-question/single-file-programming-question-order-by-with-relation.input';
import { MultipleFilesProgrammingQuestionOrderByWithRelationInput } from '../multiple-files-programming-question/multiple-files-programming-question-order-by-with-relation.input';
import { QuestionOrderByWithRelationInput } from '../question/question-order-by-with-relation.input';
import { EvaluationCriteriaOrderByRelationAggregateInput } from '../evaluation-criteria/evaluation-criteria-order-by-relation-aggregate.input';
import { PracticeProgrammingQuestionOrderByWithRelationInput } from '../practice-programming-question/practice-programming-question-order-by-with-relation.input';

@InputType()
export class ProgrammingQuestionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    statementMrkdwn?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    statementCompiled?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    programmingQuestionType?: keyof typeof SortOrder;

    @Field(() => SingleFileProgrammingQuestionOrderByWithRelationInput, {nullable:true})
    singleFileProgrammingQuestion?: SingleFileProgrammingQuestionOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    singleFileProgrammingQuestionId?: keyof typeof SortOrder;

    @Field(() => MultipleFilesProgrammingQuestionOrderByWithRelationInput, {nullable:true})
    multipleFilesProgrammingQuestion?: MultipleFilesProgrammingQuestionOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    multipleFilesProgrammingQuestionId?: keyof typeof SortOrder;

    @Field(() => QuestionOrderByWithRelationInput, {nullable:true})
    baseQuestion?: QuestionOrderByWithRelationInput;

    @Field(() => EvaluationCriteriaOrderByRelationAggregateInput, {nullable:true})
    evaluationCriterias?: EvaluationCriteriaOrderByRelationAggregateInput;

    @Field(() => PracticeProgrammingQuestionOrderByWithRelationInput, {nullable:true})
    practice?: PracticeProgrammingQuestionOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
}
