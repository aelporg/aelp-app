import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageWhereInput } from './language-where.input';

@InputType()
export class LanguageListRelationFilter {

    @Field(() => LanguageWhereInput, {nullable:true})
    every?: LanguageWhereInput;

    @Field(() => LanguageWhereInput, {nullable:true})
    some?: LanguageWhereInput;

    @Field(() => LanguageWhereInput, {nullable:true})
    none?: LanguageWhereInput;
}
