import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumClassroomRoleFieldUpdateOperationsInput } from '../prisma/enum-classroom-role-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ClassroomUpdateOneRequiredWithoutMembersInput } from '../classroom/classroom-update-one-required-without-members.input';

@InputType()
export class ClassroomMemberUpdateWithoutUserInput {

    @Field(() => EnumClassroomRoleFieldUpdateOperationsInput, {nullable:true})
    classroomRole?: EnumClassroomRoleFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ClassroomUpdateOneRequiredWithoutMembersInput, {nullable:true})
    classroom?: ClassroomUpdateOneRequiredWithoutMembersInput;
}
