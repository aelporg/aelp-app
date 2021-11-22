import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProgrammingQuestionWhereInput } from './programming-question-where.input';

@ArgsType()
export class DeleteManyProgrammingQuestionArgs {

    @Field(() => ProgrammingQuestionWhereInput, {nullable:true})
    where?: ProgrammingQuestionWhereInput;
}
