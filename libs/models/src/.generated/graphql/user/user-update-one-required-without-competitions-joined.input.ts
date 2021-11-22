import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCompetitionsJoinedInput } from './user-create-without-competitions-joined.input';
import { UserCreateOrConnectWithoutCompetitionsJoinedInput } from './user-create-or-connect-without-competitions-joined.input';
import { UserUpsertWithoutCompetitionsJoinedInput } from './user-upsert-without-competitions-joined.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutCompetitionsJoinedInput } from './user-update-without-competitions-joined.input';

@InputType()
export class UserUpdateOneRequiredWithoutCompetitionsJoinedInput {

    @Field(() => UserCreateWithoutCompetitionsJoinedInput, {nullable:true})
    create?: UserCreateWithoutCompetitionsJoinedInput;

    @Field(() => UserCreateOrConnectWithoutCompetitionsJoinedInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutCompetitionsJoinedInput;

    @Field(() => UserUpsertWithoutCompetitionsJoinedInput, {nullable:true})
    upsert?: UserUpsertWithoutCompetitionsJoinedInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutCompetitionsJoinedInput, {nullable:true})
    update?: UserUpdateWithoutCompetitionsJoinedInput;
}
