import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRefreshTokenWhereUniqueInput } from './user-refresh-token-where-unique.input';
import { UserRefreshTokenCreateInput } from './user-refresh-token-create.input';
import { UserRefreshTokenUpdateInput } from './user-refresh-token-update.input';

@ArgsType()
export class UpsertOneUserRefreshTokenArgs {

    @Field(() => UserRefreshTokenWhereUniqueInput, {nullable:false})
    where!: UserRefreshTokenWhereUniqueInput;

    @Field(() => UserRefreshTokenCreateInput, {nullable:false})
    create!: UserRefreshTokenCreateInput;

    @Field(() => UserRefreshTokenUpdateInput, {nullable:false})
    update!: UserRefreshTokenUpdateInput;
}
