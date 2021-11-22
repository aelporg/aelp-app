import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ProgrammingQuestionMaxOrderByAggregateInput {

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

    @Field(() => SortOrder, {nullable:true})
    singleFileProgrammingQuestionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    multipleFilesProgrammingQuestionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
}
