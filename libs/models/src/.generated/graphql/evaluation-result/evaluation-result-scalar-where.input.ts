import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class EvaluationResultScalarWhereInput {

    @Field(() => [EvaluationResultScalarWhereInput], {nullable:true})
    AND?: Array<EvaluationResultScalarWhereInput>;

    @Field(() => [EvaluationResultScalarWhereInput], {nullable:true})
    OR?: Array<EvaluationResultScalarWhereInput>;

    @Field(() => [EvaluationResultScalarWhereInput], {nullable:true})
    NOT?: Array<EvaluationResultScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    evaluationCriteriaId?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    evaulationPoints?: FloatFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    inputOutputEvaluationResultId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    programmingQuestionAnswerId?: StringFilter;
}
