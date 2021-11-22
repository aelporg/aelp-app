import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class EvaluationResultMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    evaluationCriteriaId?: string;

    @Field(() => Float, {nullable:true})
    evaulationPoints?: number;

    @Field(() => String, {nullable:true})
    inputOutputEvaluationResultId?: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    programmingQuestionAnswerId?: string;
}
