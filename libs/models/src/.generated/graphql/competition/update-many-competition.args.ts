import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CompetitionUpdateManyMutationInput } from './competition-update-many-mutation.input';
import { CompetitionWhereInput } from './competition-where.input';

@ArgsType()
export class UpdateManyCompetitionArgs {

    @Field(() => CompetitionUpdateManyMutationInput, {nullable:false})
    data!: CompetitionUpdateManyMutationInput;

    @Field(() => CompetitionWhereInput, {nullable:true})
    where?: CompetitionWhereInput;
}
