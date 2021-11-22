import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompetitionCreateWithoutCreatorUserInput } from './competition-create-without-creator-user.input';
import { CompetitionCreateOrConnectWithoutCreatorUserInput } from './competition-create-or-connect-without-creator-user.input';
import { CompetitionCreateManyCreatorUserInputEnvelope } from './competition-create-many-creator-user-input-envelope.input';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';

@InputType()
export class CompetitionUncheckedCreateNestedManyWithoutCreatorUserInput {

    @Field(() => [CompetitionCreateWithoutCreatorUserInput], {nullable:true})
    create?: Array<CompetitionCreateWithoutCreatorUserInput>;

    @Field(() => [CompetitionCreateOrConnectWithoutCreatorUserInput], {nullable:true})
    connectOrCreate?: Array<CompetitionCreateOrConnectWithoutCreatorUserInput>;

    @Field(() => CompetitionCreateManyCreatorUserInputEnvelope, {nullable:true})
    createMany?: CompetitionCreateManyCreatorUserInputEnvelope;

    @Field(() => [CompetitionWhereUniqueInput], {nullable:true})
    connect?: Array<CompetitionWhereUniqueInput>;
}
