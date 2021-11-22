import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class QuestionAnswerAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    points?: true;
}
