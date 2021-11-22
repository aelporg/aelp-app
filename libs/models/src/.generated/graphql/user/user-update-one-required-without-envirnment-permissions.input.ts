import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutEnvirnmentPermissionsInput } from './user-create-without-envirnment-permissions.input';
import { UserCreateOrConnectWithoutEnvirnmentPermissionsInput } from './user-create-or-connect-without-envirnment-permissions.input';
import { UserUpsertWithoutEnvirnmentPermissionsInput } from './user-upsert-without-envirnment-permissions.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutEnvirnmentPermissionsInput } from './user-update-without-envirnment-permissions.input';

@InputType()
export class UserUpdateOneRequiredWithoutEnvirnmentPermissionsInput {

    @Field(() => UserCreateWithoutEnvirnmentPermissionsInput, {nullable:true})
    create?: UserCreateWithoutEnvirnmentPermissionsInput;

    @Field(() => UserCreateOrConnectWithoutEnvirnmentPermissionsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutEnvirnmentPermissionsInput;

    @Field(() => UserUpsertWithoutEnvirnmentPermissionsInput, {nullable:true})
    upsert?: UserUpsertWithoutEnvirnmentPermissionsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutEnvirnmentPermissionsInput, {nullable:true})
    update?: UserUpdateWithoutEnvirnmentPermissionsInput;
}
