import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCreatedCompetitionsInput } from './user-create-without-created-competitions.input';
import { UserCreateOrConnectWithoutCreatedCompetitionsInput } from './user-create-or-connect-without-created-competitions.input';
import { UserUpsertWithoutCreatedCompetitionsInput } from './user-upsert-without-created-competitions.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutCreatedCompetitionsInput } from './user-update-without-created-competitions.input';

@InputType()
export class UserUpdateOneRequiredWithoutCreatedCompetitionsInput {

    @Field(() => UserCreateWithoutCreatedCompetitionsInput, {nullable:true})
    create?: UserCreateWithoutCreatedCompetitionsInput;

    @Field(() => UserCreateOrConnectWithoutCreatedCompetitionsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutCreatedCompetitionsInput;

    @Field(() => UserUpsertWithoutCreatedCompetitionsInput, {nullable:true})
    upsert?: UserUpsertWithoutCreatedCompetitionsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutCreatedCompetitionsInput, {nullable:true})
    update?: UserUpdateWithoutCreatedCompetitionsInput;
}
