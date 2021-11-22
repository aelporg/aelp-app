import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRefreshTokenUpdateManyMutationInput } from './user-refresh-token-update-many-mutation.input';
import { UserRefreshTokenWhereInput } from './user-refresh-token-where.input';

@ArgsType()
export class UpdateManyUserRefreshTokenArgs {

    @Field(() => UserRefreshTokenUpdateManyMutationInput, {nullable:false})
    data!: UserRefreshTokenUpdateManyMutationInput;

    @Field(() => UserRefreshTokenWhereInput, {nullable:true})
    where?: UserRefreshTokenWhereInput;
}
