import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LinkedAccountCreateWithoutUserInput } from './linked-account-create-without-user.input';
import { LinkedAccountCreateOrConnectWithoutUserInput } from './linked-account-create-or-connect-without-user.input';
import { LinkedAccountUpsertWithWhereUniqueWithoutUserInput } from './linked-account-upsert-with-where-unique-without-user.input';
import { LinkedAccountCreateManyUserInputEnvelope } from './linked-account-create-many-user-input-envelope.input';
import { LinkedAccountWhereUniqueInput } from './linked-account-where-unique.input';
import { LinkedAccountUpdateWithWhereUniqueWithoutUserInput } from './linked-account-update-with-where-unique-without-user.input';
import { LinkedAccountUpdateManyWithWhereWithoutUserInput } from './linked-account-update-many-with-where-without-user.input';
import { LinkedAccountScalarWhereInput } from './linked-account-scalar-where.input';

@InputType()
export class LinkedAccountUncheckedUpdateManyWithoutUserInput {

    @Field(() => [LinkedAccountCreateWithoutUserInput], {nullable:true})
    create?: Array<LinkedAccountCreateWithoutUserInput>;

    @Field(() => [LinkedAccountCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<LinkedAccountCreateOrConnectWithoutUserInput>;

    @Field(() => [LinkedAccountUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<LinkedAccountUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => LinkedAccountCreateManyUserInputEnvelope, {nullable:true})
    createMany?: LinkedAccountCreateManyUserInputEnvelope;

    @Field(() => [LinkedAccountWhereUniqueInput], {nullable:true})
    set?: Array<LinkedAccountWhereUniqueInput>;

    @Field(() => [LinkedAccountWhereUniqueInput], {nullable:true})
    disconnect?: Array<LinkedAccountWhereUniqueInput>;

    @Field(() => [LinkedAccountWhereUniqueInput], {nullable:true})
    delete?: Array<LinkedAccountWhereUniqueInput>;

    @Field(() => [LinkedAccountWhereUniqueInput], {nullable:true})
    connect?: Array<LinkedAccountWhereUniqueInput>;

    @Field(() => [LinkedAccountUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<LinkedAccountUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [LinkedAccountUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<LinkedAccountUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [LinkedAccountScalarWhereInput], {nullable:true})
    deleteMany?: Array<LinkedAccountScalarWhereInput>;
}
