import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LinkedAccountWhereUniqueInput } from './linked-account-where-unique.input';

@ArgsType()
export class FindUniqueLinkedAccountArgs {

    @Field(() => LinkedAccountWhereUniqueInput, {nullable:false})
    where!: LinkedAccountWhereUniqueInput;
}
