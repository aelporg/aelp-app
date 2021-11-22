import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LinkedAccountWhereUniqueInput } from './linked-account-where-unique.input';
import { LinkedAccountUpdateWithoutUserInput } from './linked-account-update-without-user.input';

@InputType()
export class LinkedAccountUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => LinkedAccountWhereUniqueInput, {nullable:false})
    where!: LinkedAccountWhereUniqueInput;

    @Field(() => LinkedAccountUpdateWithoutUserInput, {nullable:false})
    data!: LinkedAccountUpdateWithoutUserInput;
}
