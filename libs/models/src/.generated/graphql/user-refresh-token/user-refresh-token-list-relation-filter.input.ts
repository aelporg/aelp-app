import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRefreshTokenWhereInput } from './user-refresh-token-where.input';

@InputType()
export class UserRefreshTokenListRelationFilter {

    @Field(() => UserRefreshTokenWhereInput, {nullable:true})
    every?: UserRefreshTokenWhereInput;

    @Field(() => UserRefreshTokenWhereInput, {nullable:true})
    some?: UserRefreshTokenWhereInput;

    @Field(() => UserRefreshTokenWhereInput, {nullable:true})
    none?: UserRefreshTokenWhereInput;
}
