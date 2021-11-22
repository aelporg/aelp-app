import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleFilesProgrammingQuestionWhereUniqueInput } from './multiple-files-programming-question-where-unique.input';
import { MultipleFilesProgrammingQuestionCreateInput } from './multiple-files-programming-question-create.input';
import { MultipleFilesProgrammingQuestionUpdateInput } from './multiple-files-programming-question-update.input';

@ArgsType()
export class UpsertOneMultipleFilesProgrammingQuestionArgs {

    @Field(() => MultipleFilesProgrammingQuestionWhereUniqueInput, {nullable:false})
    where!: MultipleFilesProgrammingQuestionWhereUniqueInput;

    @Field(() => MultipleFilesProgrammingQuestionCreateInput, {nullable:false})
    create!: MultipleFilesProgrammingQuestionCreateInput;

    @Field(() => MultipleFilesProgrammingQuestionUpdateInput, {nullable:false})
    update!: MultipleFilesProgrammingQuestionUpdateInput;
}
