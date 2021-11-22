import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';

@ArgsType()
export class FindUniqueCompetitionArgs {

    @Field(() => CompetitionWhereUniqueInput, {nullable:false})
    where!: CompetitionWhereUniqueInput;
}
