import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRefreshTokenWhereInput } from './user-refresh-token-where.input';

@ArgsType()
export class DeleteManyUserRefreshTokenArgs {

    @Field(() => UserRefreshTokenWhereInput, {nullable:true})
    where?: UserRefreshTokenWhereInput;
}
