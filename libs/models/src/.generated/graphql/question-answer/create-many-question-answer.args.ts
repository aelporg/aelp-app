import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuestionAnswerCreateManyInput } from './question-answer-create-many.input';

@ArgsType()
export class CreateManyQuestionAnswerArgs {

    @Field(() => [QuestionAnswerCreateManyInput], {nullable:false})
    data!: Array<QuestionAnswerCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
