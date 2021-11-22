import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProgrammingQuestionAnswerWhereUniqueInput } from './programming-question-answer-where-unique.input';
import { ProgrammingQuestionAnswerCreateInput } from './programming-question-answer-create.input';
import { ProgrammingQuestionAnswerUpdateInput } from './programming-question-answer-update.input';

@ArgsType()
export class UpsertOneProgrammingQuestionAnswerArgs {

    @Field(() => ProgrammingQuestionAnswerWhereUniqueInput, {nullable:false})
    where!: ProgrammingQuestionAnswerWhereUniqueInput;

    @Field(() => ProgrammingQuestionAnswerCreateInput, {nullable:false})
    create!: ProgrammingQuestionAnswerCreateInput;

    @Field(() => ProgrammingQuestionAnswerUpdateInput, {nullable:false})
    update!: ProgrammingQuestionAnswerUpdateInput;
}
