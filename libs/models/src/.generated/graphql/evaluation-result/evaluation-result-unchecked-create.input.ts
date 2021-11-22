import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class EvaluationResultUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    evaluationCriteriaId!: string;

    @Field(() => Float, {nullable:false})
    evaulationPoints!: number;

    @Field(() => String, {nullable:true})
    inputOutputEvaluationResultId?: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:false})
    programmingQuestionAnswerId!: string;
}
