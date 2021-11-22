import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutEnvirnmentPermissionsInput } from './user-create-without-envirnment-permissions.input';
import { UserCreateOrConnectWithoutEnvirnmentPermissionsInput } from './user-create-or-connect-without-envirnment-permissions.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutEnvirnmentPermissionsInput {

    @Field(() => UserCreateWithoutEnvirnmentPermissionsInput, {nullable:true})
    create?: UserCreateWithoutEnvirnmentPermissionsInput;

    @Field(() => UserCreateOrConnectWithoutEnvirnmentPermissionsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutEnvirnmentPermissionsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
