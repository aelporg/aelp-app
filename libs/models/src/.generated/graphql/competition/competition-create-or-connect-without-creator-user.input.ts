import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';
import { CompetitionCreateWithoutCreatorUserInput } from './competition-create-without-creator-user.input';

@InputType()
export class CompetitionCreateOrConnectWithoutCreatorUserInput {

    @Field(() => CompetitionWhereUniqueInput, {nullable:false})
    where!: CompetitionWhereUniqueInput;

    @Field(() => CompetitionCreateWithoutCreatorUserInput, {nullable:false})
    create!: CompetitionCreateWithoutCreatorUserInput;
}
