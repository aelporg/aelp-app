import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EvaluationResultSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    evaulationPoints?: true;
}
