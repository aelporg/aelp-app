import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProgrammingQuestionWhereUniqueInput } from './programming-question-where-unique.input';
import { ProgrammingQuestionCreateInput } from './programming-question-create.input';
import { ProgrammingQuestionUpdateInput } from './programming-question-update.input';

@ArgsType()
export class UpsertOneProgrammingQuestionArgs {

    @Field(() => ProgrammingQuestionWhereUniqueInput, {nullable:false})
    where!: ProgrammingQuestionWhereUniqueInput;

    @Field(() => ProgrammingQuestionCreateInput, {nullable:false})
    create!: ProgrammingQuestionCreateInput;

    @Field(() => ProgrammingQuestionUpdateInput, {nullable:false})
    update!: ProgrammingQuestionUpdateInput;
}
