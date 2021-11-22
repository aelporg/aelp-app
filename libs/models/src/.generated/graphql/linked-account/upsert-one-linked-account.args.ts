import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LinkedAccountWhereUniqueInput } from './linked-account-where-unique.input';
import { LinkedAccountCreateInput } from './linked-account-create.input';
import { LinkedAccountUpdateInput } from './linked-account-update.input';

@ArgsType()
export class UpsertOneLinkedAccountArgs {

    @Field(() => LinkedAccountWhereUniqueInput, {nullable:false})
    where!: LinkedAccountWhereUniqueInput;

    @Field(() => LinkedAccountCreateInput, {nullable:false})
    create!: LinkedAccountCreateInput;

    @Field(() => LinkedAccountUpdateInput, {nullable:false})
    update!: LinkedAccountUpdateInput;
}
