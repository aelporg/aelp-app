import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { FileUncheckedUpdateManyWithoutEnvironmentInput } from '../file/file-unchecked-update-many-without-environment.input';
import { EnvironmentPermissionUncheckedUpdateManyWithoutEnvironmentInput } from '../environment-permission/environment-permission-unchecked-update-many-without-environment.input';

@InputType()
export class EnvironmentUncheckedUpdateWithoutAnswersInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    scratchPadData?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    submitted?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => FileUncheckedUpdateManyWithoutEnvironmentInput, {nullable:true})
    files?: FileUncheckedUpdateManyWithoutEnvironmentInput;

    @Field(() => EnvironmentPermissionUncheckedUpdateManyWithoutEnvironmentInput, {nullable:true})
    permissions?: EnvironmentPermissionUncheckedUpdateManyWithoutEnvironmentInput;
}
