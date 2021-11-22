import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutEnvirnmentPermissionsInput } from './user-create-without-envirnment-permissions.input';

@InputType()
export class UserCreateOrConnectWithoutEnvirnmentPermissionsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutEnvirnmentPermissionsInput, {nullable:false})
    create!: UserCreateWithoutEnvirnmentPermissionsInput;
}
