import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRefreshTokenUpdateInput } from './user-refresh-token-update.input';
import { UserRefreshTokenWhereUniqueInput } from './user-refresh-token-where-unique.input';

@ArgsType()
export class UpdateOneUserRefreshTokenArgs {

    @Field(() => UserRefreshTokenUpdateInput, {nullable:false})
    data!: UserRefreshTokenUpdateInput;

    @Field(() => UserRefreshTokenWhereUniqueInput, {nullable:false})
    where!: UserRefreshTokenWhereUniqueInput;
}
