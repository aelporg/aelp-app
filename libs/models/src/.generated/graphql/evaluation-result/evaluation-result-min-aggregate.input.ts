import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EvaluationResultMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    evaluationCriteriaId?: true;

    @Field(() => Boolean, {nullable:true})
    evaulationPoints?: true;

    @Field(() => Boolean, {nullable:true})
    inputOutputEvaluationResultId?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    programmingQuestionAnswerId?: true;
}
