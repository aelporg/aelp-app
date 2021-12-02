import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumEnvironmentPermissionLevelFieldUpdateOperationsInput } from '../prisma/enum-environment-permission-level-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class EnvironmentPermissionUpdateManyMutationInput {

    @Field(() => EnumEnvironmentPermissionLevelFieldUpdateOperationsInput, {nullable:true})
    permission?: EnumEnvironmentPermissionLevelFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}