import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleFilesProgrammingQuestionWhereInput } from './multiple-files-programming-question-where.input';

@InputType()
export class MultipleFilesProgrammingQuestionRelationFilter {

    @Field(() => MultipleFilesProgrammingQuestionWhereInput, {nullable:true})
    is?: MultipleFilesProgrammingQuestionWhereInput;

    @Field(() => MultipleFilesProgrammingQuestionWhereInput, {nullable:true})
    isNot?: MultipleFilesProgrammingQuestionWhereInput;
}
