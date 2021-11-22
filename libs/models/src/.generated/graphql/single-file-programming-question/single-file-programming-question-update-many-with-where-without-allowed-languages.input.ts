import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SingleFileProgrammingQuestionScalarWhereInput } from './single-file-programming-question-scalar-where.input';
import { SingleFileProgrammingQuestionUpdateManyMutationInput } from './single-file-programming-question-update-many-mutation.input';

@InputType()
export class SingleFileProgrammingQuestionUpdateManyWithWhereWithoutAllowedLanguagesInput {

    @Field(() => SingleFileProgrammingQuestionScalarWhereInput, {nullable:false})
    where!: SingleFileProgrammingQuestionScalarWhereInput;

    @Field(() => SingleFileProgrammingQuestionUpdateManyMutationInput, {nullable:false})
    data!: SingleFileProgrammingQuestionUpdateManyMutationInput;
}
