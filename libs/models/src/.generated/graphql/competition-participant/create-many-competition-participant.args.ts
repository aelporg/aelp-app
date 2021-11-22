import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CompetitionParticipantCreateManyInput } from './competition-participant-create-many.input';

@ArgsType()
export class CreateManyCompetitionParticipantArgs {

    @Field(() => [CompetitionParticipantCreateManyInput], {nullable:false})
    data!: Array<CompetitionParticipantCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
