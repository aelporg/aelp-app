import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompetitionParticipantCreateManyUserInput } from './competition-participant-create-many-user.input';

@InputType()
export class CompetitionParticipantCreateManyUserInputEnvelope {

    @Field(() => [CompetitionParticipantCreateManyUserInput], {nullable:false})
    data!: Array<CompetitionParticipantCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
