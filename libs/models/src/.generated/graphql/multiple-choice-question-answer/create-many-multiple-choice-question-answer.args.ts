import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleChoiceQuestionAnswerCreateManyInput } from './multiple-choice-question-answer-create-many.input';

@ArgsType()
export class CreateManyMultipleChoiceQuestionAnswerArgs {

    @Field(() => [MultipleChoiceQuestionAnswerCreateManyInput], {nullable:false})
    data!: Array<MultipleChoiceQuestionAnswerCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
