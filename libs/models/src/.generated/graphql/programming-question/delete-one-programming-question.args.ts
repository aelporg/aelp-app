import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProgrammingQuestionWhereUniqueInput } from './programming-question-where-unique.input';

@ArgsType()
export class DeleteOneProgrammingQuestionArgs {

    @Field(() => ProgrammingQuestionWhereUniqueInput, {nullable:false})
    where!: ProgrammingQuestionWhereUniqueInput;
}
