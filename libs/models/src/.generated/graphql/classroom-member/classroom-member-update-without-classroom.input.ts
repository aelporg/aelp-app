import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumClassroomRoleFieldUpdateOperationsInput } from '../prisma/enum-classroom-role-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutJoinedClassroomsInput } from '../user/user-update-one-required-without-joined-classrooms.input';

@InputType()
export class ClassroomMemberUpdateWithoutClassroomInput {

    @Field(() => EnumClassroomRoleFieldUpdateOperationsInput, {nullable:true})
    classroomRole?: EnumClassroomRoleFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutJoinedClassroomsInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutJoinedClassroomsInput;
}
