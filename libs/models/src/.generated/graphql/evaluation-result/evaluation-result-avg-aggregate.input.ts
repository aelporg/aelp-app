import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EvaluationResultAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    evaulationPoints?: true;
}
