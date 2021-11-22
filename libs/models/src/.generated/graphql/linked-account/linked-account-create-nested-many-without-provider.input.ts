import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LinkedAccountCreateWithoutProviderInput } from './linked-account-create-without-provider.input';
import { LinkedAccountCreateOrConnectWithoutProviderInput } from './linked-account-create-or-connect-without-provider.input';
import { LinkedAccountCreateManyProviderInputEnvelope } from './linked-account-create-many-provider-input-envelope.input';
import { LinkedAccountWhereUniqueInput } from './linked-account-where-unique.input';

@InputType()
export class LinkedAccountCreateNestedManyWithoutProviderInput {

    @Field(() => [LinkedAccountCreateWithoutProviderInput], {nullable:true})
    create?: Array<LinkedAccountCreateWithoutProviderInput>;

    @Field(() => [LinkedAccountCreateOrConnectWithoutProviderInput], {nullable:true})
    connectOrCreate?: Array<LinkedAccountCreateOrConnectWithoutProviderInput>;

    @Field(() => LinkedAccountCreateManyProviderInputEnvelope, {nullable:true})
    createMany?: LinkedAccountCreateManyProviderInputEnvelope;

    @Field(() => [LinkedAccountWhereUniqueInput], {nullable:true})
    connect?: Array<LinkedAccountWhereUniqueInput>;
}
