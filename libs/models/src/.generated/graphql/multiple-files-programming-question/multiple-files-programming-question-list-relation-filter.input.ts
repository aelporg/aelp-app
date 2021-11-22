import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleFilesProgrammingQuestionWhereInput } from './multiple-files-programming-question-where.input';

@InputType()
export class MultipleFilesProgrammingQuestionListRelationFilter {

    @Field(() => MultipleFilesProgrammingQuestionWhereInput, {nullable:true})
    every?: MultipleFilesProgrammingQuestionWhereInput;

    @Field(() => MultipleFilesProgrammingQuestionWhereInput, {nullable:true})
    some?: MultipleFilesProgrammingQuestionWhereInput;

    @Field(() => MultipleFilesProgrammingQuestionWhereInput, {nullable:true})
    none?: MultipleFilesProgrammingQuestionWhereInput;
}
