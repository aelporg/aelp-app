import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PracticeProgrammingQuestionWhereInput } from './practice-programming-question-where.input';

@ArgsType()
export class DeleteManyPracticeProgrammingQuestionArgs {

    @Field(() => PracticeProgrammingQuestionWhereInput, {nullable:true})
    where?: PracticeProgrammingQuestionWhereInput;
}
