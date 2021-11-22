import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProgrammingQuestionOrderByWithRelationInput } from '../programming-question/programming-question-order-by-with-relation.input';
import { LanguageOrderByRelationAggregateInput } from '../language/language-order-by-relation-aggregate.input';

@InputType()
export class SingleFileProgrammingQuestionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => ProgrammingQuestionOrderByWithRelationInput, {nullable:true})
    baseProgrammingQuestion?: ProgrammingQuestionOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    defaultCode?: keyof typeof SortOrder;

    @Field(() => LanguageOrderByRelationAggregateInput, {nullable:true})
    allowedLanguages?: LanguageOrderByRelationAggregateInput;
}
