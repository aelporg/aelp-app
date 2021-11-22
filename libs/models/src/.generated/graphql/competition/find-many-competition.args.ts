import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CompetitionWhereInput } from './competition-where.input';
import { CompetitionOrderByWithRelationInput } from './competition-order-by-with-relation.input';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CompetitionScalarFieldEnum } from './competition-scalar-field.enum';

@ArgsType()
export class FindManyCompetitionArgs {

    @Field(() => CompetitionWhereInput, {nullable:true})
    where?: CompetitionWhereInput;

    @Field(() => [CompetitionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CompetitionOrderByWithRelationInput>;

    @Field(() => CompetitionWhereUniqueInput, {nullable:true})
    cursor?: CompetitionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CompetitionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CompetitionScalarFieldEnum>;
}
