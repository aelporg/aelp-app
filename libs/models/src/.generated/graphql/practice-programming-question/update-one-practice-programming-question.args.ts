import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PracticeProgrammingQuestionUpdateInput } from './practice-programming-question-update.input';
import { PracticeProgrammingQuestionWhereUniqueInput } from './practice-programming-question-where-unique.input';

@ArgsType()
export class UpdateOnePracticeProgrammingQuestionArgs {

    @Field(() => PracticeProgrammingQuestionUpdateInput, {nullable:false})
    data!: PracticeProgrammingQuestionUpdateInput;

    @Field(() => PracticeProgrammingQuestionWhereUniqueInput, {nullable:false})
    where!: PracticeProgrammingQuestionWhereUniqueInput;
}
