import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompetitionScalarWhereInput } from './competition-scalar-where.input';
import { CompetitionUpdateManyMutationInput } from './competition-update-many-mutation.input';

@InputType()
export class CompetitionUpdateManyWithWhereWithoutCreatorUserInput {

    @Field(() => CompetitionScalarWhereInput, {nullable:false})
    where!: CompetitionScalarWhereInput;

    @Field(() => CompetitionUpdateManyMutationInput, {nullable:false})
    data!: CompetitionUpdateManyMutationInput;
}
