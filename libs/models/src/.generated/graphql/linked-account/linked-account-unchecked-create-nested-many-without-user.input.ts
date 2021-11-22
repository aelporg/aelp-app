import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LinkedAccountCreateWithoutUserInput } from './linked-account-create-without-user.input';
import { LinkedAccountCreateOrConnectWithoutUserInput } from './linked-account-create-or-connect-without-user.input';
import { LinkedAccountCreateManyUserInputEnvelope } from './linked-account-create-many-user-input-envelope.input';
import { LinkedAccountWhereUniqueInput } from './linked-account-where-unique.input';

@InputType()
export class LinkedAccountUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [LinkedAccountCreateWithoutUserInput], {nullable:true})
    create?: Array<LinkedAccountCreateWithoutUserInput>;

    @Field(() => [LinkedAccountCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<LinkedAccountCreateOrConnectWithoutUserInput>;

    @Field(() => LinkedAccountCreateManyUserInputEnvelope, {nullable:true})
    createMany?: LinkedAccountCreateManyUserInputEnvelope;

    @Field(() => [LinkedAccountWhereUniqueInput], {nullable:true})
    connect?: Array<LinkedAccountWhereUniqueInput>;
}
