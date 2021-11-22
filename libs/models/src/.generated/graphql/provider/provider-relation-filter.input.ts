import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProviderWhereInput } from './provider-where.input';

@InputType()
export class ProviderRelationFilter {

    @Field(() => ProviderWhereInput, {nullable:true})
    is?: ProviderWhereInput;

    @Field(() => ProviderWhereInput, {nullable:true})
    isNot?: ProviderWhereInput;
}
