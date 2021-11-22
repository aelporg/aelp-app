import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProgrammingQuestionAnswerUpdateManyMutationInput } from './programming-question-answer-update-many-mutation.input';
import { ProgrammingQuestionAnswerWhereInput } from './programming-question-answer-where.input';

@ArgsType()
export class UpdateManyProgrammingQuestionAnswerArgs {

    @Field(() => ProgrammingQuestionAnswerUpdateManyMutationInput, {nullable:false})
    data!: ProgrammingQuestionAnswerUpdateManyMutationInput;

    @Field(() => ProgrammingQuestionAnswerWhereInput, {nullable:true})
    where?: ProgrammingQuestionAnswerWhereInput;
}
