import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MultipleChoiceQuestionChoiceCorrectQuestionIdCompoundUniqueInput {

    @Field(() => Boolean, {nullable:false})
    correct!: boolean;

    @Field(() => String, {nullable:false})
    questionId!: string;
}
