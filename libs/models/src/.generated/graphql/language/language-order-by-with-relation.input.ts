import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SingleFileProgrammingQuestionOrderByRelationAggregateInput } from '../single-file-programming-question/single-file-programming-question-order-by-relation-aggregate.input';
import { MultipleFilesProgrammingQuestionOrderByRelationAggregateInput } from '../multiple-files-programming-question/multiple-files-programming-question-order-by-relation-aggregate.input';

@InputType()
export class LanguageOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    extension?: keyof typeof SortOrder;

    @Field(() => SingleFileProgrammingQuestionOrderByRelationAggregateInput, {nullable:true})
    singleFileQuestions?: SingleFileProgrammingQuestionOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => MultipleFilesProgrammingQuestionOrderByRelationAggregateInput, {nullable:true})
    MultipleFilesProgrammingQuestion?: MultipleFilesProgrammingQuestionOrderByRelationAggregateInput;
}
