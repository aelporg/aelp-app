import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutLinkedAccountsInput } from '../user/user-update-one-required-without-linked-accounts.input';
import { ProviderUpdateOneRequiredWithoutLinkedAccountsInput } from '../provider/provider-update-one-required-without-linked-accounts.input';

@InputType()
export class LinkedAccountUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    externalId?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutLinkedAccountsInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutLinkedAccountsInput;

    @Field(() => ProviderUpdateOneRequiredWithoutLinkedAccountsInput, {nullable:true})
    provider?: ProviderUpdateOneRequiredWithoutLinkedAccountsInput;
}
