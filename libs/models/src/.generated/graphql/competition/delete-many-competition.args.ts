import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CompetitionWhereInput } from './competition-where.input';

@ArgsType()
export class DeleteManyCompetitionArgs {

    @Field(() => CompetitionWhereInput, {nullable:true})
    where?: CompetitionWhereInput;
}
