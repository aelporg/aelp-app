import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PracticeProgrammingQuestionWhereUniqueInput } from './practice-programming-question-where-unique.input';

@ArgsType()
export class FindUniquePracticeProgrammingQuestionArgs {

    @Field(() => PracticeProgrammingQuestionWhereUniqueInput, {nullable:false})
    where!: PracticeProgrammingQuestionWhereUniqueInput;
}
