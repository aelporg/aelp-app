import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CompetitionCreateManyInput } from './competition-create-many.input';

@ArgsType()
export class CreateManyCompetitionArgs {

    @Field(() => [CompetitionCreateManyInput], {nullable:false})
    data!: Array<CompetitionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
