import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionAnswerWhereInput } from './question-answer-where.input';

@InputType()
export class QuestionAnswerRelationFilter {

    @Field(() => QuestionAnswerWhereInput, {nullable:true})
    is?: QuestionAnswerWhereInput;

    @Field(() => QuestionAnswerWhereInput, {nullable:true})
    isNot?: QuestionAnswerWhereInput;
}
