import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionAnswerCreateManyQuestionChoiceInput } from './multiple-choice-question-answer-create-many-question-choice.input';

@InputType()
export class MultipleChoiceQuestionAnswerCreateManyQuestionChoiceInputEnvelope {

    @Field(() => [MultipleChoiceQuestionAnswerCreateManyQuestionChoiceInput], {nullable:false})
    data!: Array<MultipleChoiceQuestionAnswerCreateManyQuestionChoiceInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
