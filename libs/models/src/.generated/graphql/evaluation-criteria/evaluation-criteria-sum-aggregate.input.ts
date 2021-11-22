import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EvaluationCriteriaSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    totalPoints?: true;
}
