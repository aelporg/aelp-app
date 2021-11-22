import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClassroomRole } from '../prisma/classroom-role.enum';

@InputType()
export class ClassroomMemberUncheckedCreateWithoutClassroomInput {

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => ClassroomRole, {nullable:false})
    classroomRole!: keyof typeof ClassroomRole;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
