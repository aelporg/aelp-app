import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LanguageCountAggregate } from './language-count-aggregate.output';
import { LanguageMinAggregate } from './language-min-aggregate.output';
import { LanguageMaxAggregate } from './language-max-aggregate.output';

@ObjectType()
export class LanguageGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    extension!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => LanguageCountAggregate, {nullable:true})
    _count?: LanguageCountAggregate;

    @Field(() => LanguageMinAggregate, {nullable:true})
    _min?: LanguageMinAggregate;

    @Field(() => LanguageMaxAggregate, {nullable:true})
    _max?: LanguageMaxAggregate;
}
