import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LinkedAccountCreateManyInput } from './linked-account-create-many.input';

@ArgsType()
export class CreateManyLinkedAccountArgs {

    @Field(() => [LinkedAccountCreateManyInput], {nullable:false})
    data!: Array<LinkedAccountCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
