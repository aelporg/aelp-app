import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LinkedAccountCreateInput } from './linked-account-create.input';

@ArgsType()
export class CreateOneLinkedAccountArgs {

    @Field(() => LinkedAccountCreateInput, {nullable:false})
    data!: LinkedAccountCreateInput;
}
