import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProgrammingQuestionAnswerWhereInput } from './programming-question-answer-where.input';

@ArgsType()
export class DeleteManyProgrammingQuestionAnswerArgs {

    @Field(() => ProgrammingQuestionAnswerWhereInput, {nullable:true})
    where?: ProgrammingQuestionAnswerWhereInput;
}
