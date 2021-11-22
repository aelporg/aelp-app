import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompetitionCreateManyCreatorUserInput } from './competition-create-many-creator-user.input';

@InputType()
export class CompetitionCreateManyCreatorUserInputEnvelope {

    @Field(() => [CompetitionCreateManyCreatorUserInput], {nullable:false})
    data!: Array<CompetitionCreateManyCreatorUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
