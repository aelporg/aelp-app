import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRefreshTokenCreateManyUserInput } from './user-refresh-token-create-many-user.input';

@InputType()
export class UserRefreshTokenCreateManyUserInputEnvelope {

    @Field(() => [UserRefreshTokenCreateManyUserInput], {nullable:false})
    data!: Array<UserRefreshTokenCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
