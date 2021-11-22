import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRefreshTokenWhereUniqueInput } from './user-refresh-token-where-unique.input';

@ArgsType()
export class FindUniqueUserRefreshTokenArgs {

    @Field(() => UserRefreshTokenWhereUniqueInput, {nullable:false})
    where!: UserRefreshTokenWhereUniqueInput;
}
