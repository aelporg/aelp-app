import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumEnvironmentPermissionLevelFieldUpdateOperationsInput } from '../prisma/enum-environment-permission-level-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnvironmentUpdateOneRequiredWithoutPermissionsInput } from '../environment/environment-update-one-required-without-permissions.input';

@InputType()
export class EnvironmentPermissionUpdateWithoutUserInput {

    @Field(() => EnumEnvironmentPermissionLevelFieldUpdateOperationsInput, {nullable:true})
    permission?: EnumEnvironmentPermissionLevelFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnvironmentUpdateOneRequiredWithoutPermissionsInput, {nullable:true})
    environment?: EnvironmentUpdateOneRequiredWithoutPermissionsInput;
}
