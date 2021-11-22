import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class QuestionAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    points?: true;
}
