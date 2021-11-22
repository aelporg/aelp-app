import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompetitionParticipantScalarWhereInput } from './competition-participant-scalar-where.input';
import { CompetitionParticipantUpdateManyMutationInput } from './competition-participant-update-many-mutation.input';

@InputType()
export class CompetitionParticipantUpdateManyWithWhereWithoutUserInput {

    @Field(() => CompetitionParticipantScalarWhereInput, {nullable:false})
    where!: CompetitionParticipantScalarWhereInput;

    @Field(() => CompetitionParticipantUpdateManyMutationInput, {nullable:false})
    data!: CompetitionParticipantUpdateManyMutationInput;
}
