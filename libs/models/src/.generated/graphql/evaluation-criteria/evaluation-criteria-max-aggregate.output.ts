import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EvaluationCriteriaType } from '../prisma/evaluation-criteria-type.enum';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EvaluationCriteriaMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => EvaluationCriteriaType, {nullable:true})
    type?: keyof typeof EvaluationCriteriaType;

    @Field(() => Int, {nullable:true})
    totalPoints?: number;

    @Field(() => String, {nullable:true})
    inputOutputEvalCritId?: string;

    @Field(() => Boolean, {nullable:true})
    requiredToPass?: boolean;

    @Field(() => String, {nullable:true})
    programmingQuestionId?: string;

    @Field(() => Boolean, {nullable:true})
    hidden?: boolean;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
