import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LinkedAccountWhereUniqueInput } from './linked-account-where-unique.input';
import { LinkedAccountUpdateWithoutUserInput } from './linked-account-update-without-user.input';
import { LinkedAccountCreateWithoutUserInput } from './linked-account-create-without-user.input';

@InputType()
export class LinkedAccountUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => LinkedAccountWhereUniqueInput, {nullable:false})
    where!: LinkedAccountWhereUniqueInput;

    @Field(() => LinkedAccountUpdateWithoutUserInput, {nullable:false})
    update!: LinkedAccountUpdateWithoutUserInput;

    @Field(() => LinkedAccountCreateWithoutUserInput, {nullable:false})
    create!: LinkedAccountCreateWithoutUserInput;
}
