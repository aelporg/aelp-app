import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutEnvirnmentPermissionsInput } from './user-update-without-envirnment-permissions.input';
import { UserCreateWithoutEnvirnmentPermissionsInput } from './user-create-without-envirnment-permissions.input';

@InputType()
export class UserUpsertWithoutEnvirnmentPermissionsInput {

    @Field(() => UserUpdateWithoutEnvirnmentPermissionsInput, {nullable:false})
    update!: UserUpdateWithoutEnvirnmentPermissionsInput;

    @Field(() => UserCreateWithoutEnvirnmentPermissionsInput, {nullable:false})
    create!: UserCreateWithoutEnvirnmentPermissionsInput;
}
