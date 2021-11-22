import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';
import { CompetitionCreateInput } from './competition-create.input';
import { CompetitionUpdateInput } from './competition-update.input';

@ArgsType()
export class UpsertOneCompetitionArgs {

    @Field(() => CompetitionWhereUniqueInput, {nullable:false})
    where!: CompetitionWhereUniqueInput;

    @Field(() => CompetitionCreateInput, {nullable:false})
    create!: CompetitionCreateInput;

    @Field(() => CompetitionUpdateInput, {nullable:false})
    update!: CompetitionUpdateInput;
}
