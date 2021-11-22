import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionChoiceUncheckedCreateNestedManyWithoutQuestionInput } from '../multiple-choice-question-choice/multiple-choice-question-choice-unchecked-create-nested-many-without-question.input';

@InputType()
export class MultipleChoiceQuestionUncheckedCreateWithoutBaseQuestionInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => MultipleChoiceQuestionChoiceUncheckedCreateNestedManyWithoutQuestionInput, {nullable:true})
    choices?: MultipleChoiceQuestionChoiceUncheckedCreateNestedManyWithoutQuestionInput;
}
