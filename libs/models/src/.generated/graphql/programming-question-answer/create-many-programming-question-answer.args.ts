import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProgrammingQuestionAnswerCreateManyInput } from './programming-question-answer-create-many.input';

@ArgsType()
export class CreateManyProgrammingQuestionAnswerArgs {

    @Field(() => [ProgrammingQuestionAnswerCreateManyInput], {nullable:false})
    data!: Array<ProgrammingQuestionAnswerCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
