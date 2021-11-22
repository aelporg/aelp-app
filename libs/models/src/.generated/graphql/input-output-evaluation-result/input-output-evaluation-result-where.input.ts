import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { EvaluationResultRelationFilter } from '../evaluation-result/evaluation-result-relation-filter.input';

@InputType()
export class InputOutputEvaluationResultWhereInput {

    @Field(() => [InputOutputEvaluationResultWhereInput], {nullable:true})
    AND?: Array<InputOutputEvaluationResultWhereInput>;

    @Field(() => [InputOutputEvaluationResultWhereInput], {nullable:true})
    OR?: Array<InputOutputEvaluationResultWhereInput>;

    @Field(() => [InputOutputEvaluationResultWhereInput], {nullable:true})
    NOT?: Array<InputOutputEvaluationResultWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    resultOutputs?: StringNullableListFilter;

    @Field(() => EvaluationResultRelationFilter, {nullable:true})
    baseEvaluationResult?: EvaluationResultRelationFilter;
}
