import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompetitionCreateNestedOneWithoutParticipantsInput } from '../competition/competition-create-nested-one-without-participants.input';

@InputType()
export class CompetitionParticipantCreateWithoutUserInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CompetitionCreateNestedOneWithoutParticipantsInput, {nullable:false})
    competition!: CompetitionCreateNestedOneWithoutParticipantsInput;
}
