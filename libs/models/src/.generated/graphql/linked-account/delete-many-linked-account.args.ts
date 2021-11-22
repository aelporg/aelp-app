import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LinkedAccountWhereInput } from './linked-account-where.input';

@ArgsType()
export class DeleteManyLinkedAccountArgs {

    @Field(() => LinkedAccountWhereInput, {nullable:true})
    where?: LinkedAccountWhereInput;
}
