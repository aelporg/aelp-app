import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnvironmentWhereInput } from './environment-where.input';

@InputType()
export class EnvironmentRelationFilter {

    @Field(() => EnvironmentWhereInput, {nullable:true})
    is?: EnvironmentWhereInput;

    @Field(() => EnvironmentWhereInput, {nullable:true})
    isNot?: EnvironmentWhereInput;
}
