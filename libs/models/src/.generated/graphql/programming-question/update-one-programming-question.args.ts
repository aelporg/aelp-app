import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProgrammingQuestionUpdateInput } from './programming-question-update.input';
import { ProgrammingQuestionWhereUniqueInput } from './programming-question-where-unique.input';

@ArgsType()
export class UpdateOneProgrammingQuestionArgs {

    @Field(() => ProgrammingQuestionUpdateInput, {nullable:false})
    data!: ProgrammingQuestionUpdateInput;

    @Field(() => ProgrammingQuestionWhereUniqueInput, {nullable:false})
    where!: ProgrammingQuestionWhereUniqueInput;
}
