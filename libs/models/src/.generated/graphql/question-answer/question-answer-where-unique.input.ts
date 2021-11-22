import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class QuestionAnswerWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    multipleChoiceQuestionAnswerId?: string;

    @Field(() => String, {nullable:true})
    programmingQuestionAnswerId?: string;
}
