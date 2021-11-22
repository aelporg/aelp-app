import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class QuestionWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    multipleChoiceQuestionId?: string;

    @Field(() => String, {nullable:true})
    programmingQuestionId?: string;
}
