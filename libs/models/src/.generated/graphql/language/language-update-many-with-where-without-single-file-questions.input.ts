import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageScalarWhereInput } from './language-scalar-where.input';
import { LanguageUpdateManyMutationInput } from './language-update-many-mutation.input';

@InputType()
export class LanguageUpdateManyWithWhereWithoutSingleFileQuestionsInput {

    @Field(() => LanguageScalarWhereInput, {nullable:false})
    where!: LanguageScalarWhereInput;

    @Field(() => LanguageUpdateManyMutationInput, {nullable:false})
    data!: LanguageUpdateManyMutationInput;
}
