import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionAnswerWhereInput } from './question-answer-where.input';

@InputType()
export class QuestionAnswerListRelationFilter {

    @Field(() => QuestionAnswerWhereInput, {nullable:true})
    every?: QuestionAnswerWhereInput;

    @Field(() => QuestionAnswerWhereInput, {nullable:true})
    some?: QuestionAnswerWhereInput;

    @Field(() => QuestionAnswerWhereInput, {nullable:true})
    none?: QuestionAnswerWhereInput;
}
