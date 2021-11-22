import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleFilesProgrammingQuestionUpdateInput } from './multiple-files-programming-question-update.input';
import { MultipleFilesProgrammingQuestionWhereUniqueInput } from './multiple-files-programming-question-where-unique.input';

@ArgsType()
export class UpdateOneMultipleFilesProgrammingQuestionArgs {

    @Field(() => MultipleFilesProgrammingQuestionUpdateInput, {nullable:false})
    data!: MultipleFilesProgrammingQuestionUpdateInput;

    @Field(() => MultipleFilesProgrammingQuestionWhereUniqueInput, {nullable:false})
    where!: MultipleFilesProgrammingQuestionWhereUniqueInput;
}
