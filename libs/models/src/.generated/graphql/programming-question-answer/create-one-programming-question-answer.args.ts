import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProgrammingQuestionAnswerCreateInput } from './programming-question-answer-create.input';

@ArgsType()
export class CreateOneProgrammingQuestionAnswerArgs {

    @Field(() => ProgrammingQuestionAnswerCreateInput, {nullable:false})
    data!: ProgrammingQuestionAnswerCreateInput;
}
