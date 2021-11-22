import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleFilesProgrammingQuestionCreateManyInput } from './multiple-files-programming-question-create-many.input';

@ArgsType()
export class CreateManyMultipleFilesProgrammingQuestionArgs {

    @Field(() => [MultipleFilesProgrammingQuestionCreateManyInput], {nullable:false})
    data!: Array<MultipleFilesProgrammingQuestionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
