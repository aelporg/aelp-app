import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LinkedAccountCreateWithoutProviderInput } from './linked-account-create-without-provider.input';
import { LinkedAccountCreateOrConnectWithoutProviderInput } from './linked-account-create-or-connect-without-provider.input';
import { LinkedAccountUpsertWithWhereUniqueWithoutProviderInput } from './linked-account-upsert-with-where-unique-without-provider.input';
import { LinkedAccountCreateManyProviderInputEnvelope } from './linked-account-create-many-provider-input-envelope.input';
import { LinkedAccountWhereUniqueInput } from './linked-account-where-unique.input';
import { LinkedAccountUpdateWithWhereUniqueWithoutProviderInput } from './linked-account-update-with-where-unique-without-provider.input';
import { LinkedAccountUpdateManyWithWhereWithoutProviderInput } from './linked-account-update-many-with-where-without-provider.input';
import { LinkedAccountScalarWhereInput } from './linked-account-scalar-where.input';

@InputType()
export class LinkedAccountUpdateManyWithoutProviderInput {

    @Field(() => [LinkedAccountCreateWithoutProviderInput], {nullable:true})
    create?: Array<LinkedAccountCreateWithoutProviderInput>;

    @Field(() => [LinkedAccountCreateOrConnectWithoutProviderInput], {nullable:true})
    connectOrCreate?: Array<LinkedAccountCreateOrConnectWithoutProviderInput>;

    @Field(() => [LinkedAccountUpsertWithWhereUniqueWithoutProviderInput], {nullable:true})
    upsert?: Array<LinkedAccountUpsertWithWhereUniqueWithoutProviderInput>;

    @Field(() => LinkedAccountCreateManyProviderInputEnvelope, {nullable:true})
    createMany?: LinkedAccountCreateManyProviderInputEnvelope;

    @Field(() => [LinkedAccountWhereUniqueInput], {nullable:true})
    set?: Array<LinkedAccountWhereUniqueInput>;

    @Field(() => [LinkedAccountWhereUniqueInput], {nullable:true})
    disconnect?: Array<LinkedAccountWhereUniqueInput>;

    @Field(() => [LinkedAccountWhereUniqueInput], {nullable:true})
    delete?: Array<LinkedAccountWhereUniqueInput>;

    @Field(() => [LinkedAccountWhereUniqueInput], {nullable:true})
    connect?: Array<LinkedAccountWhereUniqueInput>;

    @Field(() => [LinkedAccountUpdateWithWhereUniqueWithoutProviderInput], {nullable:true})
    update?: Array<LinkedAccountUpdateWithWhereUniqueWithoutProviderInput>;

    @Field(() => [LinkedAccountUpdateManyWithWhereWithoutProviderInput], {nullable:true})
    updateMany?: Array<LinkedAccountUpdateManyWithWhereWithoutProviderInput>;

    @Field(() => [LinkedAccountScalarWhereInput], {nullable:true})
    deleteMany?: Array<LinkedAccountScalarWhereInput>;
}
