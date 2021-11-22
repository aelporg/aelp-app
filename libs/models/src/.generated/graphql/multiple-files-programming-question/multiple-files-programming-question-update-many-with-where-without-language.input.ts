import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleFilesProgrammingQuestionScalarWhereInput } from './multiple-files-programming-question-scalar-where.input';
import { MultipleFilesProgrammingQuestionUpdateManyMutationInput } from './multiple-files-programming-question-update-many-mutation.input';

@InputType()
export class MultipleFilesProgrammingQuestionUpdateManyWithWhereWithoutLanguageInput {

    @Field(() => MultipleFilesProgrammingQuestionScalarWhereInput, {nullable:false})
    where!: MultipleFilesProgrammingQuestionScalarWhereInput;

    @Field(() => MultipleFilesProgrammingQuestionUpdateManyMutationInput, {nullable:false})
    data!: MultipleFilesProgrammingQuestionUpdateManyMutationInput;
}
