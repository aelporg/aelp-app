import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRefreshTokenCreateManyInput } from './user-refresh-token-create-many.input';

@ArgsType()
export class CreateManyUserRefreshTokenArgs {

    @Field(() => [UserRefreshTokenCreateManyInput], {nullable:false})
    data!: Array<UserRefreshTokenCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
