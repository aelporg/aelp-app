import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PracticeProgrammingQuestionMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    questionId?: true;

    @Field(() => Boolean, {nullable:true})
    diffculty?: true;

    @Field(() => Boolean, {nullable:true})
    classroomId?: true;
}
