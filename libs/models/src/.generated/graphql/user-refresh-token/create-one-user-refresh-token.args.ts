import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRefreshTokenCreateInput } from './user-refresh-token-create.input';

@ArgsType()
export class CreateOneUserRefreshTokenArgs {

    @Field(() => UserRefreshTokenCreateInput, {nullable:false})
    data!: UserRefreshTokenCreateInput;
}
