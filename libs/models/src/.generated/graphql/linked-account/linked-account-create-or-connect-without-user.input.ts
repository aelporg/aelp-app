import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LinkedAccountWhereUniqueInput } from './linked-account-where-unique.input';
import { LinkedAccountCreateWithoutUserInput } from './linked-account-create-without-user.input';

@InputType()
export class LinkedAccountCreateOrConnectWithoutUserInput {

    @Field(() => LinkedAccountWhereUniqueInput, {nullable:false})
    where!: LinkedAccountWhereUniqueInput;

    @Field(() => LinkedAccountCreateWithoutUserInput, {nullable:false})
    create!: LinkedAccountCreateWithoutUserInput;
}
