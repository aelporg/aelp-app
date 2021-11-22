import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CompetitionUpdateInput } from './competition-update.input';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';

@ArgsType()
export class UpdateOneCompetitionArgs {

    @Field(() => CompetitionUpdateInput, {nullable:false})
    data!: CompetitionUpdateInput;

    @Field(() => CompetitionWhereUniqueInput, {nullable:false})
    where!: CompetitionWhereUniqueInput;
}
