import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PracticeProgrammingQuestionCreateInput } from './practice-programming-question-create.input';

@ArgsType()
export class CreateOnePracticeProgrammingQuestionArgs {

    @Field(() => PracticeProgrammingQuestionCreateInput, {nullable:false})
    data!: PracticeProgrammingQuestionCreateInput;
}
