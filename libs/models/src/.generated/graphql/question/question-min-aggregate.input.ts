import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class QuestionMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    questionType?: true;

    @Field(() => Boolean, {nullable:true})
    points?: true;

    @Field(() => Boolean, {nullable:true})
    multipleChoiceQuestionId?: true;

    @Field(() => Boolean, {nullable:true})
    programmingQuestionId?: true;

    @Field(() => Boolean, {nullable:true})
    assessmentId?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}
