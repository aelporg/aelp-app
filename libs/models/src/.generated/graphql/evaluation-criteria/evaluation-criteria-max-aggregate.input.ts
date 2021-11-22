import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EvaluationCriteriaMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    type?: true;

    @Field(() => Boolean, {nullable:true})
    totalPoints?: true;

    @Field(() => Boolean, {nullable:true})
    inputOutputEvalCritId?: true;

    @Field(() => Boolean, {nullable:true})
    requiredToPass?: true;

    @Field(() => Boolean, {nullable:true})
    programmingQuestionId?: true;

    @Field(() => Boolean, {nullable:true})
    hidden?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}
