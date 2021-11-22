import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionAnswerCreateManyQuestionInput } from './question-answer-create-many-question.input';

@InputType()
export class QuestionAnswerCreateManyQuestionInputEnvelope {

    @Field(() => [QuestionAnswerCreateManyQuestionInput], {nullable:false})
    data!: Array<QuestionAnswerCreateManyQuestionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
