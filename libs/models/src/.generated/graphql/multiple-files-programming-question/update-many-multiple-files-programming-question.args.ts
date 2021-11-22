import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleFilesProgrammingQuestionUpdateManyMutationInput } from './multiple-files-programming-question-update-many-mutation.input';
import { MultipleFilesProgrammingQuestionWhereInput } from './multiple-files-programming-question-where.input';

@ArgsType()
export class UpdateManyMultipleFilesProgrammingQuestionArgs {

    @Field(() => MultipleFilesProgrammingQuestionUpdateManyMutationInput, {nullable:false})
    data!: MultipleFilesProgrammingQuestionUpdateManyMutationInput;

    @Field(() => MultipleFilesProgrammingQuestionWhereInput, {nullable:true})
    where?: MultipleFilesProgrammingQuestionWhereInput;
}
