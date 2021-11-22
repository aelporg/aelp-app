import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCreatedCompetitionsInput } from './user-create-without-created-competitions.input';
import { UserCreateOrConnectWithoutCreatedCompetitionsInput } from './user-create-or-connect-without-created-competitions.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutCreatedCompetitionsInput {

    @Field(() => UserCreateWithoutCreatedCompetitionsInput, {nullable:true})
    create?: UserCreateWithoutCreatedCompetitionsInput;

    @Field(() => UserCreateOrConnectWithoutCreatedCompetitionsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutCreatedCompetitionsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
