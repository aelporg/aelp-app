import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CompetitionCreateInput } from './competition-create.input';

@ArgsType()
export class CreateOneCompetitionArgs {

    @Field(() => CompetitionCreateInput, {nullable:false})
    data!: CompetitionCreateInput;
}
