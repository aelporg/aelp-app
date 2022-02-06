import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProviderCount {

    @Field(() => Int, {nullable:false})
    linkedAccounts!: number;
}
