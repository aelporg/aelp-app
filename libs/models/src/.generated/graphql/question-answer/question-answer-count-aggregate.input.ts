import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class QuestionAnswerCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    questionId?: true;

    @Field(() => Boolean, {nullable:true})
    multipleChoiceQuestionAnswerId?: true;

    @Field(() => Boolean, {nullable:true})
    programmingQuestionAnswerId?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    assessmentSubmissionId?: true;

    @Field(() => Boolean, {nullable:true})
    points?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
