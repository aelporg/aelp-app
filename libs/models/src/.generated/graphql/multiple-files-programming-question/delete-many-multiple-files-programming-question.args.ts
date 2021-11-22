import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleFilesProgrammingQuestionWhereInput } from './multiple-files-programming-question-where.input';

@ArgsType()
export class DeleteManyMultipleFilesProgrammingQuestionArgs {

    @Field(() => MultipleFilesProgrammingQuestionWhereInput, {nullable:true})
    where?: MultipleFilesProgrammingQuestionWhereInput;
}
