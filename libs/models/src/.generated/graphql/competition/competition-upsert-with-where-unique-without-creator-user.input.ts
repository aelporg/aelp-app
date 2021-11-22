import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';
import { CompetitionUpdateWithoutCreatorUserInput } from './competition-update-without-creator-user.input';
import { CompetitionCreateWithoutCreatorUserInput } from './competition-create-without-creator-user.input';

@InputType()
export class CompetitionUpsertWithWhereUniqueWithoutCreatorUserInput {

    @Field(() => CompetitionWhereUniqueInput, {nullable:false})
    where!: CompetitionWhereUniqueInput;

    @Field(() => CompetitionUpdateWithoutCreatorUserInput, {nullable:false})
    update!: CompetitionUpdateWithoutCreatorUserInput;

    @Field(() => CompetitionCreateWithoutCreatorUserInput, {nullable:false})
    create!: CompetitionCreateWithoutCreatorUserInput;
}
