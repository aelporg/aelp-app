import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProgrammingQuestionAnswerUpdateInput } from './programming-question-answer-update.input';
import { ProgrammingQuestionAnswerWhereUniqueInput } from './programming-question-answer-where-unique.input';

@ArgsType()
export class UpdateOneProgrammingQuestionAnswerArgs {

    @Field(() => ProgrammingQuestionAnswerUpdateInput, {nullable:false})
    data!: ProgrammingQuestionAnswerUpdateInput;

    @Field(() => ProgrammingQuestionAnswerWhereUniqueInput, {nullable:false})
    where!: ProgrammingQuestionAnswerWhereUniqueInput;
}
