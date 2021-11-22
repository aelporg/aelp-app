import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCompetitionsJoinedInput } from './user-create-without-competitions-joined.input';
import { UserCreateOrConnectWithoutCompetitionsJoinedInput } from './user-create-or-connect-without-competitions-joined.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutCompetitionsJoinedInput {

    @Field(() => UserCreateWithoutCompetitionsJoinedInput, {nullable:true})
    create?: UserCreateWithoutCompetitionsJoinedInput;

    @Field(() => UserCreateOrConnectWithoutCompetitionsJoinedInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutCompetitionsJoinedInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
