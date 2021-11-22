import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PracticeProgrammingQuestionWhereUniqueInput } from './practice-programming-question-where-unique.input';
import { PracticeProgrammingQuestionCreateInput } from './practice-programming-question-create.input';
import { PracticeProgrammingQuestionUpdateInput } from './practice-programming-question-update.input';

@ArgsType()
export class UpsertOnePracticeProgrammingQuestionArgs {

    @Field(() => PracticeProgrammingQuestionWhereUniqueInput, {nullable:false})
    where!: PracticeProgrammingQuestionWhereUniqueInput;

    @Field(() => PracticeProgrammingQuestionCreateInput, {nullable:false})
    create!: PracticeProgrammingQuestionCreateInput;

    @Field(() => PracticeProgrammingQuestionUpdateInput, {nullable:false})
    update!: PracticeProgrammingQuestionUpdateInput;
}
