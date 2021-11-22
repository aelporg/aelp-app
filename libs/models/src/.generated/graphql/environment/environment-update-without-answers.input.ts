import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { FileUpdateManyWithoutEnvironmentInput } from '../file/file-update-many-without-environment.input';
import { EnvironmentPermissionUpdateManyWithoutEnvironmentInput } from '../environment-permission/environment-permission-update-many-without-environment.input';

@InputType()
export class EnvironmentUpdateWithoutAnswersInput {

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

    @Field(() => FileUpdateManyWithoutEnvironmentInput, {nullable:true})
    files?: FileUpdateManyWithoutEnvironmentInput;

    @Field(() => EnvironmentPermissionUpdateManyWithoutEnvironmentInput, {nullable:true})
    permissions?: EnvironmentPermissionUpdateManyWithoutEnvironmentInput;
}
