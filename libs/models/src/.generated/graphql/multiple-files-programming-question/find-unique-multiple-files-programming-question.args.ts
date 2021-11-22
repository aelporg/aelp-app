import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleFilesProgrammingQuestionWhereUniqueInput } from './multiple-files-programming-question-where-unique.input';

@ArgsType()
export class FindUniqueMultipleFilesProgrammingQuestionArgs {

    @Field(() => MultipleFilesProgrammingQuestionWhereUniqueInput, {nullable:false})
    where!: MultipleFilesProgrammingQuestionWhereUniqueInput;
}
