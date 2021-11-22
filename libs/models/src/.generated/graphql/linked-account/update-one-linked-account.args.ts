import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LinkedAccountUpdateInput } from './linked-account-update.input';
import { LinkedAccountWhereUniqueInput } from './linked-account-where-unique.input';

@ArgsType()
export class UpdateOneLinkedAccountArgs {

    @Field(() => LinkedAccountUpdateInput, {nullable:false})
    data!: LinkedAccountUpdateInput;

    @Field(() => LinkedAccountWhereUniqueInput, {nullable:false})
    where!: LinkedAccountWhereUniqueInput;
}
