import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRefreshTokenScalarWhereInput } from './user-refresh-token-scalar-where.input';
import { UserRefreshTokenUpdateManyMutationInput } from './user-refresh-token-update-many-mutation.input';

@InputType()
export class UserRefreshTokenUpdateManyWithWhereWithoutUserInput {

    @Field(() => UserRefreshTokenScalarWhereInput, {nullable:false})
    where!: UserRefreshTokenScalarWhereInput;

    @Field(() => UserRefreshTokenUpdateManyMutationInput, {nullable:false})
    data!: UserRefreshTokenUpdateManyMutationInput;
}
