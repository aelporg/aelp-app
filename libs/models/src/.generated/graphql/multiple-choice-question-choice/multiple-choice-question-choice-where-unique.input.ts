import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionChoiceCorrectQuestionIdCompoundUniqueInput } from './multiple-choice-question-choice-correct-question-id-compound-unique.input';

@InputType()
export class MultipleChoiceQuestionChoiceWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => MultipleChoiceQuestionChoiceCorrectQuestionIdCompoundUniqueInput, {nullable:true})
    correct_questionId?: MultipleChoiceQuestionChoiceCorrectQuestionIdCompoundUniqueInput;
}
