import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProgrammingQuestionCreateInput } from './programming-question-create.input';

@ArgsType()
export class CreateOneProgrammingQuestionArgs {

    @Field(() => ProgrammingQuestionCreateInput, {nullable:false})
    data!: ProgrammingQuestionCreateInput;
}
