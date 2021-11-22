import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompetitionCreateWithoutCreatorUserInput } from './competition-create-without-creator-user.input';
import { CompetitionCreateOrConnectWithoutCreatorUserInput } from './competition-create-or-connect-without-creator-user.input';
import { CompetitionUpsertWithWhereUniqueWithoutCreatorUserInput } from './competition-upsert-with-where-unique-without-creator-user.input';
import { CompetitionCreateManyCreatorUserInputEnvelope } from './competition-create-many-creator-user-input-envelope.input';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';
import { CompetitionUpdateWithWhereUniqueWithoutCreatorUserInput } from './competition-update-with-where-unique-without-creator-user.input';
import { CompetitionUpdateManyWithWhereWithoutCreatorUserInput } from './competition-update-many-with-where-without-creator-user.input';
import { CompetitionScalarWhereInput } from './competition-scalar-where.input';

@InputType()
export class CompetitionUpdateManyWithoutCreatorUserInput {

    @Field(() => [CompetitionCreateWithoutCreatorUserInput], {nullable:true})
    create?: Array<CompetitionCreateWithoutCreatorUserInput>;

    @Field(() => [CompetitionCreateOrConnectWithoutCreatorUserInput], {nullable:true})
    connectOrCreate?: Array<CompetitionCreateOrConnectWithoutCreatorUserInput>;

    @Field(() => [CompetitionUpsertWithWhereUniqueWithoutCreatorUserInput], {nullable:true})
    upsert?: Array<CompetitionUpsertWithWhereUniqueWithoutCreatorUserInput>;

    @Field(() => CompetitionCreateManyCreatorUserInputEnvelope, {nullable:true})
    createMany?: CompetitionCreateManyCreatorUserInputEnvelope;

    @Field(() => [CompetitionWhereUniqueInput], {nullable:true})
    set?: Array<CompetitionWhereUniqueInput>;

    @Field(() => [CompetitionWhereUniqueInput], {nullable:true})
    disconnect?: Array<CompetitionWhereUniqueInput>;

    @Field(() => [CompetitionWhereUniqueInput], {nullable:true})
    delete?: Array<CompetitionWhereUniqueInput>;

    @Field(() => [CompetitionWhereUniqueInput], {nullable:true})
    connect?: Array<CompetitionWhereUniqueInput>;

    @Field(() => [CompetitionUpdateWithWhereUniqueWithoutCreatorUserInput], {nullable:true})
    update?: Array<CompetitionUpdateWithWhereUniqueWithoutCreatorUserInput>;

    @Field(() => [CompetitionUpdateManyWithWhereWithoutCreatorUserInput], {nullable:true})
    updateMany?: Array<CompetitionUpdateManyWithWhereWithoutCreatorUserInput>;

    @Field(() => [CompetitionScalarWhereInput], {nullable:true})
    deleteMany?: Array<CompetitionScalarWhereInput>;
}
