import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';
import { CompetitionUpdateWithoutCreatorUserInput } from './competition-update-without-creator-user.input';

@InputType()
export class CompetitionUpdateWithWhereUniqueWithoutCreatorUserInput {

    @Field(() => CompetitionWhereUniqueInput, {nullable:false})
    where!: CompetitionWhereUniqueInput;

    @Field(() => CompetitionUpdateWithoutCreatorUserInput, {nullable:false})
    data!: CompetitionUpdateWithoutCreatorUserInput;
}
