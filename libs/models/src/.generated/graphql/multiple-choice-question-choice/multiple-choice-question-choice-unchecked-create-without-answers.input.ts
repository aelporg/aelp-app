import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MultipleChoiceQuestionChoiceUncheckedCreateWithoutAnswersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    choice!: string;

    @Field(() => String, {nullable:false})
    questionId!: string;

    @Field(() => Boolean, {nullable:true})
    correct?: boolean;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
