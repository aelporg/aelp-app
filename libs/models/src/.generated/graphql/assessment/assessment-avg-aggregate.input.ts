import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AssessmentAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    totalPoints?: true;
}
