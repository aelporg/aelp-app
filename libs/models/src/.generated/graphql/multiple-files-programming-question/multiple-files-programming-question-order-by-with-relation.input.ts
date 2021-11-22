import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { LanguageOrderByWithRelationInput } from '../language/language-order-by-with-relation.input';
import { ProgrammingQuestionOrderByWithRelationInput } from '../programming-question/programming-question-order-by-with-relation.input';
import { FileOrderByRelationAggregateInput } from '../file/file-order-by-relation-aggregate.input';

@InputType()
export class MultipleFilesProgrammingQuestionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => LanguageOrderByWithRelationInput, {nullable:true})
    language?: LanguageOrderByWithRelationInput;

    @Field(() => ProgrammingQuestionOrderByWithRelationInput, {nullable:true})
    baseProgrammingQuestion?: ProgrammingQuestionOrderByWithRelationInput;

    @Field(() => FileOrderByRelationAggregateInput, {nullable:true})
    defaultFiles?: FileOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    languageId?: keyof typeof SortOrder;
}
