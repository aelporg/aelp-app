import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleFilesProgrammingQuestionCreateInput } from './multiple-files-programming-question-create.input';

@ArgsType()
export class CreateOneMultipleFilesProgrammingQuestionArgs {

    @Field(() => MultipleFilesProgrammingQuestionCreateInput, {nullable:false})
    data!: MultipleFilesProgrammingQuestionCreateInput;
}
