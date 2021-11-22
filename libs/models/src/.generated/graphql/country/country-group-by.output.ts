import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CountryCountAggregate } from './country-count-aggregate.output';
import { CountryMinAggregate } from './country-min-aggregate.output';
import { CountryMaxAggregate } from './country-max-aggregate.output';

@ObjectType()
export class CountryGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    countryName!: string;

    @Field(() => String, {nullable:false})
    countryCode!: string;

    @Field(() => String, {nullable:false})
    flagImageUrl!: string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => CountryCountAggregate, {nullable:true})
    _count?: CountryCountAggregate;

    @Field(() => CountryMinAggregate, {nullable:true})
    _min?: CountryMinAggregate;

    @Field(() => CountryMaxAggregate, {nullable:true})
    _max?: CountryMaxAggregate;
}
